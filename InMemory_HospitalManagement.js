//Below is very simple and easy to understand code base . If you feel like you have forget the HTTP Requests you can checkout this file where I have used GET , POST , PUT and DELETE Request . 
//Well  this is an In memory system (Not Recomended) . Our Backend can go down due to many reasons so this is just to get insights how things really works . 
const express = require("express")
const app = express()
app.use(express.json())
const port = 3000;


const user = [{
    fname: "John", kidneys: [{
    healthy:true
    }]
}]
//First End Point as per Assignment : Get request In very simple/raw words you want any data or any info fom your application we use get request 
app.get("/", (req, res) => {
    const johnkedneys = user[0].kidneys
    const noofkidenys = johnkedneys.length
    let noofhealthykidney = 0
    for (let i = 0; i < noofkidenys; i++) {
        if (johnkedneys[i].healthy) {
            noofhealthykidney += 1;
        }
    }
    const NoofUnhealthykidneys = noofkidenys - noofhealthykidney
    res.json({
        noofhealthykidney,
        noofkidenys,
        NoofUnhealthykidneys
    })

})

//Second End point : Post Request when you wans to tell something to your application such that it stores your message it can either be a photo , text any form of data . 
app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "Done"
    });
});
//Third End point: when yopu wants to do some operation such that user data will be altered / changed as per requirments - that is what our Backend is . 
app.put("/",(req,res)=>{
    for(let i=0;i<user[0].kidneys.length;i++)
    {
        user[0].kidneys[i].healthy=true;
    }
    res.json({
        msg:"done"
    })

})
// Fourth End point : Now you have posted something and you wants to delete that data .
app.delete("/",(req,res)=>{
    const newkedneys=[]
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i.healthy]){
            newkedneys.push({
                healthy:true
            })
        }
    }
    user[0].kidneys=newkedneys
    res.json({
        msg:"done"
    })

})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
