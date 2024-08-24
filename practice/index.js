const express = require('express');
const app = express();

app.use(express.json());

app.post('/signin', (req,res) => {
    console.log("Entered in signin route handler");
    const username = req.body.username;
    console.log("body: ", req.body);
    console.log("username: ", username);
    res.json({
        msg: "successfully signed in"
    })
})

app.listen(3000, () => {
    console.log("Server successfully started at port 3000");
 }
)