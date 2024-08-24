const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());  // to parse json input from post request


// In memory database : the values of variable will back to original
// when we restart the server .
const users = [{
        name : "Shyam",
        kidneys : [{
            healthy : false
        }]
    }
]

app.get("/", function (req, res){
    const shyamKidneys = users[0].kidneys;
    let numberOfKidneys = shyamKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for(let i=0; i<shyamKidneys.length; i++){
        if(shyamKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    } 
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post("/", function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    });
    
    res.json({
        msg : "Done"
    })
});

// let make all kidneys healthy when a put request will come :-
app.put("/", function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// let if delete request will come, we will delete all unhealthy kidneys :-
app.delete("/", function(req, res){
    
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "done"});
    } else{
        // res.sendStatus(411);
        res.status(411).json({
            msg : "You have no bad kidneys"
        })
    }
    
    
})


function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(PORT);