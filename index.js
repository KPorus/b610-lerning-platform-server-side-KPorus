const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const homeProduct = require("./Data/Home.json");
const course = require("./Data/Courses.json");

app.use((req, res, next)=>
{
    console.log(req.path,"Fardin every time")
    next();
})

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
    let selectedCourse = course.filter(n => n.catagory_id == id);
    res.send(selectedCourse);
})

app.get("/course-detail/:id",(req,res)=>
{
    let id1 = req.params.id;
    let selectedCourse = course.find(n => n.id == id1);
    res.send(selectedCourse);
})

app.listen(Port,() =>{
    console.log("Post runing on server",Port);
})