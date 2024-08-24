const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const JWT_PASSWORD = process.env.JWT_PASSWORD;

const { Userschema } = require('./middlewares/zod');
const { User } = require('./db');
const { isUsernameTaken } = require('./middlewares/UserExists');
const { json } = require('body-parser');

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    // validate username and password
    const decoded = Userschema.safeParse({username: username, password: password});
    if( !decoded.success ) {
        return res.json({
            msg: "Username or password not satisfying the condition"
        });
    }

    // check if username already exists
    try {
        const usernameTaken = await isUsernameTaken(username);
    
        if ( usernameTaken ) {
            return res.json({
                msg: "Username already exists"
            });
        }

        const newUser = new User({
            username: username,
            password: password
        });

        const user = await newUser.save();

        return res.json({
            msg: "User created successfully",
            user: user
        })
    } catch (err) {
        return res.json({
            msg: "error in creating user",
            error: err
        })
    }

})


app.get('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const isUserExists = await User.findOne({username: username, password: password});

    if (!isUserExists) {
        return res.json({
            msg: "User does not exists"
        });
    }

    const token = jwt.sign({username: username}, JWT_PASSWORD);

    res.json({
        jwt: token
    });

});

app.get('/users', async (req, res) => {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, JWT_PASSWORD);
        const username = decoded.username;

        const allUsers = await User.find({username: {$ne: username}});

        return res.json({
            users: allUsers
        })
    } catch {
        res.json({
            msg: "Error in getting users"
        })
    }
    
    
});

app.listen(PORT, () => {
    console.log(`Successfully started the server at port ${PORT}`);
})