// Global catches :-

// Why do we need validation check :-
// To handle exception in a better way , we use global catches at end
// Global catch :- a middleware , when an exception occur, the control goes to 
// this middleware. 

// NOTE :- Global catches help us give the user a Better error message.

const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
});


// global catches :- takes 4 inputs
app.use(function (err, req, res , next) {
    // console.error(err); // Log the error for debugging
    // countErrors++;        // we can track the error count , sends an alert after a limit
    res.json({
        msg : "Sorry something is up with our server"
    });
});

app.listen(3000);