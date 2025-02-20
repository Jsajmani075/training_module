const Post=require('../models/post');
const createPost=async(req,res)=>{
  try{
    const post=await Post.create(req.body);
    res.json({ message: "Post created", post });
  }
  catch(err){
  console.log("error is:",err);
  res.json({error:err.message});
  }
  };
module.exports={createPost};