const express=require('express');
const router=express.Router();
const {User}=require("../models/User");


// creating new user
router.post('/',async(req,res) =>{
try{
  const user=await User.create(req.body);
  res.status(201).json(user);
}catch(err){
  res.status(500).json({error:err.message});
}
});
//get all user 
router.get('/',async(req,res) =>{
  try{
    const user=await User.findAll();
    res.json(user);
  }catch(err){
    res.status(500).json({error:err.message});
  }
  });
  //get user by a specific id 
  router.get('/:id',async(req,res) =>{
    try{
      const user=await User.findByPk(req.params.id);
      if(!user)return res.status(404).json({error:"User not found"});
      res.status(201).json(user);
    }catch(err){
      res.status(500).json({error:err.message});
    }
    });

    //update a user by its id 

    router.put('/:id',async(req,res) =>{
      try{
        const user=await User.findByPk(req.params.id);
        if(!user)return res.status(404).json({error:"User not found"});
        await user.update(req.body);
        res.status(201).json(user);
      }catch(err){
        res.status(500).json({error:err.message});
      }
      });

      //delete a user by id 
      router.delete('/:id',async(req,res) =>{
        try{
          const user=await User.findByPk(req.params.id);
          if(!user)return res.status(404).json({error:"User not found"});
          await user.destroy();
          res.json("user deleted successfully");
        }catch(err){
          res.status(500).json({error:err.message});
        }
        });
        module.exports=router;