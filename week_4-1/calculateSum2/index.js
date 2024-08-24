// sum-server
const exp = require("constants");
const express = require("express");

const app = express();

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});