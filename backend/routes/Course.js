const {Router } = require("express");

const Course = require("../models/Course");

const courseRouter = Router();



courseRouter.post("/purchase",(req,res)=>{
    res.send("purchased ");
});

courseRouter.get("/preview",(req,res)=>{
    res.send("purchased "); 
});
















module.exports = courseRouter;