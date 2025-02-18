const express=require('express');
const router=express.Router();
const {User}=require("../models/user");

//register student
router.post('/',async(req,res) =>{
  try{
    const user=await User.create(req.body);
    res.status(201).json(user);
  }catch(err){
    console.log(err);
    res.status(500).json({error:err.message});
  }
  });
  //get all student
  router.get('/',async(req,res) =>{
    try{
      const user=await User.findAll();
      res.json(user);
    }catch(err){
      res.status(500).json({error:err.message});
    }
    });
    module.exports=router;