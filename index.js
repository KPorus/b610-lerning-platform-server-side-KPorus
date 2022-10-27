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

app.get("/allCourses", (req,res)=>
{
    res.send(course);
})

app.get("/allCourses/:category_id",(req,res)=>
{
    let id = req.params.category_id;
    console.log(req.params.category_id)
    let selectedCourse = course.filter(n => n.catagory_id == id);
    console.log(selectedCourse)
    res.send(selectedCourse);
})

app.listen(Port,() =>{
    console.log("Post runing on server",Port);
})