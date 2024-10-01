const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const {JWT_ADMIN_PASSWORD} = require("../config.js");
const jwt = require("jsonwebtoken");
router.use(express.json());
const adminMdidlleware = require("../middleware/admin");
const courseModel = require("../models/Course");

router.post("/signin",async(req,res)=>{
    const {email, password} = req.body;
    //Todo : ideally hash the password , so this logic to compare password will not work 
    const admin = await Admin.findOne({email:email, password:password});
    if(admin){
        const token = jwt.sign({
            _id:admin._id
        }, JWT_ADMIN_PASSWORD, {expiresIn: "1h"});
        //do cookie logic here
        return res.send({token:token});
    }else{
        res.status(403).send("invalid credentials");
    }
});

router.post("/signup",async(req,res)=>{  
    const {email, password, firstName, lastName} = req.body; // TODO: add validation (ex:use zod library)
    //Todo: encrypt the password (ex: use bcrypt library)
    
    //Todo: put inside try catch block
   await Admin.create(
  {
        email,
        password,
        firstName,
        lastName
     }     
    );


  res.send("signup succesfull");
});


router.post("/course",adminMdidlleware,async(req,res)=>{ 
    const adminId = req.userId;


    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
    })
});

router.put("/course",adminMdidlleware,async(req,res)=>{
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas in 6 hours
    const course = await courseModel.updateOne({
        _id: courseId, 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
});

router.get("/course/bulk",adminMdidlleware,async(req,res)=>{
    const adminId = req.userId;
     console.log("adminId",adminId);
    const courses = await courseModel.find({
        creatorId: adminId 
    });
    console.log("courses",courses);
    res.json({
        message: "Course updated",
        courses
    })
});

module.exports = router;