const express = require("express");
const router = express.Router();
const User= require("../models/User");
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");    

router.use(express.json());

router.post("/login",(req,res)=>{
    res.send("login ");
});

router.post("/signup",async(req,res)=>{
       const {email, password, firstName, lastName} = req.body; // TODO: add validation (ex:use zod library)
       //Todo: encrypt the password (ex: use bcrypt library)
       
       //Todo: put inside try catch block
      await User.create(
          { email,
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

router.get("/purchase",(req,res)=>{
res.send("purchased ");
});

module.exports = router;
