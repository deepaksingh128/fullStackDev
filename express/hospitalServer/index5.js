// Best solution :- Middlewares

// Middlewares basic (below):-
// Actual solution :- index6.js


// We can have multiple callbacks inside get, post, put , delete ,.i.e.(inside route handlers)
// these callbacks are actually middlewares and to call the next callback
// we have another parameter other than req and res . And this parameter
// is a function itself and when we call this function , control goes to next middleware.
// The last middleware actually does not need the third parameter.
// Also , this last middleware is called as the controller 


const express = require("express");

const app = express();

app.get("/health-checkup", 
    function (req, res, next) {      // middleware 1 (defining and using middleware)
        console.log("hi from req1");
    },
    function (req, res) {   // last middleware (controller)
        console.log("hi from req2");
    }
);


app.listen(3000);