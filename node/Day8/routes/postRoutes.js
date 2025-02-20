const express=require('express');
const router=express.Router();
const {createPost}=require('../controllers/postController');
//create profile
router.post('/',createPost);
module.exports=router;