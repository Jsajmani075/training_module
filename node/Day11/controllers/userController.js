const User=require('../models/user');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const secret_key="jdgwufg";
//user registration

const createUser=async(req,res)=>{
  console.log("body",req.body);
  const {name,email,password}=req.body;
if(!name || !email || !password){
  return res.send("all fields are required");
}
  try{
const user=await User.findOne({where:{email}});
if(user){
  return res.send("user is registered");
}
const hashedPassword=await bcrypt.hash(password,10);
const newUser=await User.create({name,email,password:hashedPassword});
res.status(200).json(newUser);
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}
//login of user
const loginUser=async(req,res)=>{
  const {name,email,password}=req.body;
if(!name || !email || !password){
  return res.send("all fields are required");
}
  try{

    const user=await User.findOne({where:{email}});

if(!user){
  return res.send("user is not registered go for registration");
}
const matchpassword=await bcrypt.compare(password,user.password);
if(!matchpassword){
  return res.send("password is invalid");
}
const token=jwt.sign({email:user.email},secret_key,{expiresIn:'1h'});
  res.status(200).json({token});
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}
//delete user
const deleteUser=async(req,res)=>{

  try{
const {email}=req.params;
if(!email){
  return res.send("user not found");
}
const user=await User.destroy({where:{email}});
  res.status(200).json("user deleted successfuly");
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}

//update user
const updateUser=async(req,res)=>{
  try{
const {email}=req.params;
if(!email){
  return res.send("user not found");
}
const user=await User.update(req.body,{where:{email}});
  res.status(200).json({"user updated successfuly":user});
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}

//get all user 
const getAllUser=async(req,res)=>{

  try{
const user=await User.findAll();
  res.status(200).json(user);
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}

//getuser and all its detail by its id
module.exports={createUser,getAllUser,loginUser,updateUser,deleteUser};