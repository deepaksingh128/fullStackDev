const express = require("express");
const app = express();
const port = 3000;

app.get('/', function (req, res){
    res.send("Hello Deepak");
});

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
})