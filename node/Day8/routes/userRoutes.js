const express=require('express');
const router=express.Router();
const {createUser,deleteUser,getAllUser,getUserbyId,updateUser}=require('../controllers/userController');
//get user by id
router.get('/:id',getUserbyId);
//get all user 
router.get('/',getAllUser);
//create user
router.post('/',createUser);
//delete user
router.delete('/:id',deleteUser);
//update user
router.put('/:id',updateUser);

module.exports=router;