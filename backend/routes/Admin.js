const express = require("express");
const router = express.Router();
const User = require("../models/Admin");

router.use(express.json());

router.post("/login",(req,res)=>{
    res.send("admin login ");
});

router.post("/signup",(req,res)=>{  
res.send("admin signup ");
});


router.post("/course",(req,res)=>{ 
res.send("admin purchased ");
});

router.delete("/course",(req,res)=>{
res.send("admin purchased ");
});

router.put("/course",(req,res)=>{
res.send("admin purchased ");
});

router.get("/course/bulk",(req,res)=>{
res.send("admin purchased ");
});

module.exports = router;