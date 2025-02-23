const axios=require('axios');
const cron = require("node-cron");
const { Op } = require("sequelize");
const Job=require('../models/job');

//fetch all job from public apiand save data in to db

// const fetchAllJob=async(req,res)=>{
//   try{
//   const response=await axios.get('https://api.smartrecruiters.com/feed/publications');
//   if(!response.data)res.send("error in fetching data");

//   const jobdata=response.data.content.map(job=>({
//     title:job.title,
//     company:job.company_name,
//     location:job.location.city,
//     description:job.description,
//     apply_url:job.url,
//   }))

//   const currentDate=new Date();
//   const expireDate=new Date();
//   expireDate
//   const savedata=await Job.bulkCreate(jobdata);
//   res.status(200).json(savedata);

//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error:err.message});
//   }
// }

//create job 
const createJob=async(req,res)=>{
    try{
      console.log("Request Body:", req.body);
      const{title,company,location,experience_level,description,expire_days}=req.body;
  if(!title || !company || !location || !experience_level || !description || !expire_days){

    return res.send("all fields are required");
  }
      const jobdata=await Job.create({title,company,location,experience_level,description,expire_days});
      if(!jobdata){
        return res.send("problem in creating data");
      }
      res.status(200).json({jobcreated:jobdata});
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }

  //delete job
  const deleteJob=async(req,res)=>{
    const{id}=req.params;
    if(!id){
      return res.send("id is invalid");
    }
      try{
        const jobdata=await Job.findOne({where:{id}});
        if(!jobdata){
          return res.send("no job found");
        }
        const deleteJobData=await Job.destroy({where:{id}});//ek baar check karna
        res.status(200).json("job deleted successfully");
      }
      catch(err){
        res.status(500).send({error:err.message})
      }
    }

//update a job

const updateJob=async(req,res)=>{
  const{id}=req.params;
  if(!id){
    return res.send("id is invalid");
  }
    try{
      const jobdata=await Job.findOne({where:{id}});
      if(!jobdata){
        return res.send("no job found");
      }
      const updateJobData=await Job.update(req.body,{where:{id}});//ek baar check karna
      res.status(200).json({"job update successfully":updateJobData});
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }

//get all job 
const getAllJob=async(req,res)=>{
    try{
      const jobdata=await Job.findAll();
      if(!jobdata){
        return res.send("no job found");
      }
      res.status(200).json(jobdata);
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }


//get job by a specific keyword

//doubt
const getAllJobbyKeyword=async(req,res)=>{
  try{
    const getdata=req.body;
    if(!getdata || Object.keys(getdata).length==0){
      return res.send("no data found");
    }
const jobData=await Job.findAll({where:getdata});
if (jobData.length === 0) 
  return res.status(404).json({ message: "No jobs found" });
    res.status(200).json(jobData);
  }
  catch(err){
    res.status(500).send({error:err.message})
  }
}
//cron

cron.schedule('0 0 * * *',async()=>{
try{
  const currentDate=new Date();
  const expireDate=currentDate.setDate(currentDate.getDate()+Number(expire_days));
  await Job.destroy({where:{expireDate:{[Op.lt]:currentDate}}});
  res.send("Expired jobs deleted successfully"); 
}
catch(err){
  res.json({error:err.message}); 
}
});

module.exports={createJob,getAllJobbyKeyword,getAllJob,deleteJob,updateJob};
