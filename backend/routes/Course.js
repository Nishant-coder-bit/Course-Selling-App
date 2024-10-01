const {Router } = require("express");

const Course = require("../models/Course");
const userMiddleware = require("../middleware/user");
const purchaseModel = require("../models/Purchase");
const courseModel = require("../models/Course");
const courseRouter = Router();



courseRouter.post("/purchase",userMiddleware,async(req,res)=>{
    const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
});

courseRouter.get("/preview",async(req,res)=>{
       
    const courses = await courseModel.find({});

    res.json({
        courses
    })
});
















module.exports = courseRouter;