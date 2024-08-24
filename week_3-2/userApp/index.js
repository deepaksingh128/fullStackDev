const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

// mongoose.connect("mongodb+srv://deepaksingh128367:4mqHacELEssoQDCv@cluster0.makubps.mongodb.net/");
mongoose.connect("mongodb+srv://deepaksingh128367:4mqHacELEssoQDCv@cluster0.makubps.mongodb.net/user_app"); //   /database_name


const User = mongoose.model('users', { username: String, email: String, 
password: String});


app.post('/signup', async function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email : username});
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        username: username,
        email: email,
        password: password
    });
    user.save();

    const token = jwt.sign( {username: username }, jwtPassword);
    res.json({
        "msg" : "User created successfully",
    });
});


app.post('/signin', function(req, res) {
    
    
});

app.listen(3000, function() {
    console.log("Successfully started server at port "+ 3000);
});





