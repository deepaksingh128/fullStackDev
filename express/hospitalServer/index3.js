// What if I tell you to introduce another route that does Kidney replacement ,
// inputs need to be the same

// Ugly Solution :- Create a new route , repeat the code , as below :- 
// Slightly better solution :- index4.js

const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res){
    // do health checkup
        
       // username , password passed as headers 
       // kidneyId passed as params
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "deepak" || password != "pass"){
        res.status(403).json({
            msg : "User does not exist"
        });
        return;
    }

    if(kidneyId != 1 && kidneyId !=2 ) {
        res.status(411).json({
            msg : "wrong inputs"
        });
        return;
    }

    // do something with the input
    res.json({
        msg : "Your kidney is fine"
    });
});

app.put("/replace-kidney", function (req, res) {
    // do health checks here also
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "deepak" && password != "pass") {
        res.status(403).json({
            msg : "User does not exist",
        });
        return;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg : "wrong inputs",
        });
        return;
    }

    // do kidney replacement logic
    res.send("Your kindney is replaced");
})


app.listen(3000);