// Server :-

const express = require("express");
const app = express();

app.get('/interest', (req, res) => {
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);

    const interest = (principal * rate * time) / 100;
    const total = principal + interest;

    res.send({
        total : total,
        interest : interest
    });
});

app.listen(3000, function() {
    console.log("Server has been started successfully on port "+ 3000);
});