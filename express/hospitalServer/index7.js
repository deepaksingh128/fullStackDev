// One of the use of middleware :-
// We can calculate the number of requests coming to our server

const express = require("express");

const app = express();

// rate limiting
let numberOfRequests = 0; // Although it is in memory variable, hence when
                          // we restart the server its value will again be reset to default
                          // and then increment .

// Defining Middleware to calculate numberOfRequests 
function calculateRequests(req, res, next) {
    numberOfRequests ++;
    console.log("Number of requests till now " + numberOfRequests);
    next();
} 

// Using middlewares:-
app.get("/heart-checkup", calculateRequests, function (req, res) {
    res.send("Your heart health is checked");
});

app.get("/fitness-checkup", calculateRequests, function (req, res) {
    res.send("Your fitness test is done");
});

app.listen(3000);