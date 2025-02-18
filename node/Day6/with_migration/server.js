const express=require('express');
const app=express();
const StudentRoute = require('./routes/Student_Route');
app.use(express.json());
const PORT=8080;


app.use('/student',StudentRoute);
app.listen(PORT,(req,res)=>{
  console.log(`express running on ${PORT}`);
})