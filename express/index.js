// creating an http server :- since we are creating it in our machine
// therefore only we can access it , or someone who is connected to in the
// same wi-fi as this machine using this machine's ip address , 
// if we deploy it on internet , so everyone can
// access it using internet.
//
// we are using express library here 
// express is a node default library => NO , we have install it first to our
// local machine before importing/requiring it inside our file 
// User can give input in certain ways , one of those is query parameters,
// In the search bar , after route , put ? , and write value of input(s),
// e.g. localhost:3000/?n=30    ,  or  localhost:3000?n=30  , these are query parameters

// Request Methods:- GET, POST, PUT, DELETE
// PUT:- e.g. change your first name, change password, i.e. replace



const express = require("express");

function calculateSum(n){
	let ans = 0;
	for(let i = 1; i<=n; i++){
		ans = ans + i;
	}
	return ans;
}

const app = express();

app.get('/', function(req, res){
	const n = req.query.n;
	const ans = calculateSum(n);
	// res.send(ans); // error
	res.send(ans.toString());
});

app.listen(3000);
