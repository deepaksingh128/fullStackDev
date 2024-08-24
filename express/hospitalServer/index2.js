// Adding some checks before process the request
// Note :- Dumb way of doing the input validation and authentication :-


const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;



    if(username != "deepak" || password != "pass") {
        res.status(400).json({"msg" : "something up with your inputs"});
        return;
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg" : "Somethings up with your inputs"});
        return;
    }

    res.json({
        msg : "Your kidney is fine!"
    });
});


app.listen(3000);