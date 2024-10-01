const express = require("express");
const router = express.Router();
const User= require("../models/User");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");    
 const  { JWT_USER_PASSWORD } = require("../config.js");
router.use(express.json());
const userMiddleware = require("../middleware/user");
const purchaseModel = require("../models/Purchase");
const courseModel = require("../models/Course");

router.post("/signin",async(req,res)=>{
    const {email, password} = req.body;
    //Todo : ideally hash the password , so this logic to compare password will not work 
    const user = await User.findOne({email:email, password:password});
    if(user){
        const token = jwt.sign({
            _id:user._id
        }, JWT_USER_PASSWORD, {expiresIn: "1h"});
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
      await User.create(
     {
           email,
           password,
           firstName,
           lastName
        }     
       );


     res.send("signup succesfull");

})  

router.get("/courses",(req,res)=>{
res.send("course ");
})

router.post("/course/purchase",(req,res)=>{ 
res.send("purchased ");
})

router.get("/purchases",userMiddleware,async(req,res)=>{
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for (let i = 0; i<purchases.length;i++){ 
        purchasedCourseIds.push(purchases[i].courseId)
    }

    const coursesData = await courseModel.find({
        _id: { $in: purchasedCourseIds }
    })

    res.json({
        purchases,
        coursesData
    })
});

module.exports = router;
