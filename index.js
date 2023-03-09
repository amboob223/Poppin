const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

    //middleware
        app.use(express.json())// this is the json parser so we can break up and beable to read jsonn on diffrent browswes
        app.use(cors())// this middleware allsows us to talk with diffrent apps 

    // making a post 

app.post("/clubs", async(req,res)=>{
   
    try {
         const data = {name,sectionnum,sectioncost,phone,address} = req.body// remember we did stringify json to get the body when we did fetch in teh response that the req for the .body and we got to deconstruct the object
    const newData = await pool.query(
        "INSERT INTO clubs(id,name,sectionnum,sectioncost,phone,address) VALUES(nextval('clubs_id_seq'),$1,$2,$3,$4,$5) RETURNING *",
    [name,sectionnum,sectioncost,phone,address]
    )
    res.json(newData)

    } catch (error) {
        console.log(error)
    }
});


app.post("/users", async(req,res)=>{
    try {
                const {name,phone,email,paying} = req.body
            const newData = await pool.query(
                "INSERT INTO users(id,name,phone,email,paying) VALUES(nextval('users_id_seq'),$1,$2,$3,$4) RETURNING *",
                [name,phone,email,paying]
                )
            res.json(newData) //its important to send the json back to tyhe browswr
    } catch (error) {
        console.log(error)
    }
});


app.listen(5000,()=>{
    console.log("yurrd")
})