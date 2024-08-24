// Using zod library to validate user input :-
// zod is an independent library, we can use it without express.

// * require("zod") // after installing from npm ,...
// * make schema (the input that should be accepted)
// * call a function on schema , which takes user input as an arguments 

const z = require("zod");

// What to validate :- If this object contains email and password (min 8 letters) return true , else return false
function validateInput(obj) {

    // creating schema :- 
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8)
    });

    // calling function :-
    const response = schema.safeParse(obj);
    console.log(response);
}

// validateInput(["1", 2, 3]);          // success : false

validateInput({                        // success : true
    password : "12345678",
    email : "deepaksingh12@gmail.com"
});

validateInput({                        // success : false
    password : "123456",
    email : "deepaksingh12@gmail.com"
});

validateInput({                        // success : false
    password : "123456",
    email : "deepaksingh12gmail.com"
});

validateInput({                        // success : false
    password : "123456",
    email : "deepaksingh12gmail.com",
    more : "extra"
});


// Similarly we can validate http request input also :
// application.post("/login", function (req, res) {
//     const response = validateInput(req.body);
//     if (!response.success) {
//         res.json({
//             msg : "Your inputs are invalid"
//         });
//         return;
//     }
// });