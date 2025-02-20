const User=require('../models/user');
const Profile=require('../models/profile');
const Post=require('../models/post');
//create of user

const createUser=async(req,res)=>{
try{
  const user=await User.create(req.body);
  res.status(200).json(user);
}
catch(err){
console.log("error is:",err);
res.json({error:err.message});
}
};


//get user detail by id
const getUserbyId=async(req,res)=>{
  try{
    const{id}=req.params;
    const user=await User.findByPk(id,{include: [{ model: Profile, as: "profile" },{ model: Post, as: "posts" }]});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
  }

  res.json(user);}
  catch(err){
  console.log("error is:",err);
  res.json({error:err.message});
  }
  };
  //get all users
  const getAllUser=async(req,res)=>{
    try{
      const user=await User.findAll();
      res.status(200).json(user);
    }
    catch(err){
    console.log("error is:",err);
    res.json({error:err.message});
    }
    };
 
    //update user 
    const updateUser=async(req,res)=>{
      try{
        const user=await User.update(req.body,{where:{id:req.params.id}});
        res.status(200).send(200).json({message:"user updated ",user});
      }
      catch(err){
      console.log("error is:",err);
      res.send({error:err.message});
      }
      };
      //delete user 
      const deleteUser=async(req,res)=>{
        try{
          const user=await User.destroy({where:{id:req.params.id}});
          res.status(200).send("user deleted successfully");
        }
        catch(err){
        console.log("error is:",err);
        res.json({error:err.message});
        }
        };

        module.exports={createUser,deleteUser,getAllUser,getUserbyId,updateUser};