// In middlewares :- app.use

const express = require('express');

const app = express();

// defining middleware :-
function fitnessTest(req, res, next) {
    const runningSpeed = req.query.runningSpeed;

    if(runningSpeed > 20) {
        res.send("You are fit.");
    } else{
        next();
    }
}


app.use(fitnessTest);  // after this statement , all the 
                       // below requests routes will automatically call 
                       // this middleware , whenever any request come to 
                       // the route

app.get("/fitness-test", function (req, res) {  // Now we are not needed to 
    res.send("You are not fit");                // mention above middleware , it 
});                                          // will automatically called first


//    // * it is same as writing the above thing:-
// app.get("/fitness-test", fitnessTest, function (req, res) {
//     res.send("You are not fit");
// })

app.listen(3000);