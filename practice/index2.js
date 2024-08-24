const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "123";

const app = express();
app.use(express.json());



const users = [
    {
        "username": "deepak",
        "password": "deepak@123",
        "email": "deepak@gmail.com",
    },
    {
            "username": "deepika",
            "password": "deepika@123",
            "email": "deepika@gmail.com",
    },
    {
            "username": "deepesh",
            "password": "deepesh@123",
            "email": "deepesh@gmail.com",
    }
]

function isUserExists(username, password) {
    for(const user of users) {
        if(user.username === username && user.password === password) {
            userExists = true;
        }
    }
    return false;
}

app.post('/signin', (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if(isUserExists(username, password)) {
        return res.json({
            success: false,
            message:"Authenticationfailed. User not found."
        });
    }

    console.log(username);
    const token = jwt.sign({username: username}, jwtPassword);
    
    res.json({
        token: token,
    });
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    console.log("token", token);
    const decoded = jwt.verify(token, jwtPassword);
    console.log("decoded: ", decoded);
    const username = decoded.username;
    console.log(username);

    const data = users.filter(user => user.username !== username);

    res.json({
        users: data
    });
    
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});