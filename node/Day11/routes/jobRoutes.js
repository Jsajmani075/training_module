const express=require('express');
const router=express.Router();
const {createJob,getAllJobbyKeyword,getAllJob,deleteJob,updateJob}=require('../controllers/jobController');
router.post('/',createJob);
router.get('/all',getAllJob);
router.get('/',getAllJobbyKeyword);
router.put('/:id',updateJob);
router.delete('/:id',deleteJob);
module.exports=router;
