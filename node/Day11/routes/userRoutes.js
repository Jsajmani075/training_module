const express=require('express');
const router=express.Router();
const {createUser,getAllUser,loginUser,updateUser,deleteUser}=require('../controllers/userController');
const authmiddleware=require('../middleware/auth.js');

router.get('/',getAllUser);
router.post('/login',loginUser);
router.post('/register',createUser);
router.put('/update/:email',authmiddleware,updateUser);
router.delete('/delete/:email',authmiddleware,deleteUser);
module.exports=router;