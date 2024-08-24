const express = require("express");
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";
const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "deepaksingh@123",
        password: "123",
        name: "Deepak"
    },
    {
        username: "deepeshsingh@456",
        password: "456",
        name: "Deepesh"
    },
    {
        username: "deepikasingh@789",
        password: "789",
        name: "Deepika"
    }
]

function userExists(username, password) {
    let temp = false;
    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            temp = true;
            break;
        }
    }
    return temp;
}

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.json({
            msg : "User does not exist in our in memory db"
        });
    } 

    var token = jwt.sign({username : username} , jwtPassword);
    return res.json({
        token
    });
});


app.get('/users', function(req, res) {
    const token = req.headers.authorization;

    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    
    res.json({
        ALL_USERS
    });
})



app.listen(3000, function() {
    console.log("Server successfully started on port: " + 3000);
})