const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const homeProduct = require("./Data/Home.json");
const course = require("./Data/Courses.json");

app.get("/",(req ,res)=>
{
    res.send(homeProduct);
})


app.listen(Port,() =>{
    console.log("Post runing on server",Port);
})