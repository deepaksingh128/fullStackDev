// Best solution :- middlewares

const express = require("express");

const app = express();

// Defining middlewares :- 
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    
    if (username != "deepak" && password != "pass") {
        res.status(403).json({
            msg : "User does not exist",
        });
    } else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg : "Incorrect inputs",
        });
    } else{
        next();
    }
};


app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) { // using middlewares
    res.send("Your health-checkup is done, you are healthy.");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
    res.send("Your kidney is fine");
});

app.get("/heart-check", userMiddleware, function (req, res) {
    res.send("Your heart is healthy");
    // console.log("Healthy heart"); // we can write statements after res , but we cannot have more than
                                     // one res for a request.
});


app.listen(3000);