const express=require('express');
const router=express.Router();
const {userSavedJob,userDeleteJob,GetalljobsavedbyUser,updatejobsavedbyUser}=require('../controllers/jobUserController');
const authmiddleware=require('../middleware/auth.js');
router.post('/',authmiddleware,userSavedJob);
router.get('/:id',authmiddleware,GetalljobsavedbyUser);
router.put('/',authmiddleware,updatejobsavedbyUser);
router.delete('/:user_id/:job_id',authmiddleware,userDeleteJob);














module.exports=router;