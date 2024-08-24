// Slightly better solution :- Create wrapper functions

const express = require('express');

const app = express();


function usernameValidator(username, password) {
    if (username != "deepak" && password != "pass") {
        return false;
    }
    return true;
}

function kidneyValidator(kidneyId) {
    if (kidneyId != 1 && kidneyId != 2) {
        return false;
    }
    return true;
}


app.get("/health-checkup", function (req, res) {
    // do health checks here
    const kidneyId = req.query.kidneyId;

    if (!usernameValidator(req.headers.username, req.headers.password)) {
        res.status(403).json({
            msg : "User does not exist",
        });
        return;

    }

    if (!kidneyValidator(kidneyId)) {
        res.staus(411).json({
            msg : "Wrong inputs",
        });
        return;
    }

    // do somrthing with kidney here
    res.send("Your kidney is fine");
});

app.put("/replace-kidney", function (req, res) {
    // do health checks here 
    const kidneyId = req.query.kidneyId;
    const password = req.headers.password;
    const username = req.headers.username;

    if (!usernameValidator(username, password)) {
        res.status(403).json({
            msg : "User does not exist",
        });
        return;
    }

    if (!kidneyValidator(kidneyId)) {
        res.status(411).json({
            msg : "Wrong inputs",
        });
        return;
    }

    // do something with the kidneys
    res.send("Your kidney is replaced");
});

// server wiil start on port 3000
app.listen(3000);