const express = require("express");
function calculateSum(a, b){
	return a+b;
}

const app = express();

app.get('./', function(req, res){
	const a = req.query.a;
	const b = req.query.b;
	const ans = calculateSum(a, b);
	res.send(ans);
})

app.listen(30001);
