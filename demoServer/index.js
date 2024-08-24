const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.get('/sum-server', (req, res) => {
    const jsonData = {
        network: 4,
        jobs: 5,
        messaging: 4,
        notifications: 3
    }
    res.json(jsonData);
});

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const sum = parseInt(a) + parseInt(b);

    res.json({
        sum: parseInt(sum)
    });
})

app.listen(3000, () => {
    console.log("successfully started the server at port 3000");
});
