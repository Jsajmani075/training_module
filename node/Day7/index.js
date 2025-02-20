const express=require('express');
const app=express();
const userroute=require('./routes/userRoute');
const PORT=8080;
app.use(express.json());
app.use('/api/user',userroute);
app.listen(PORT,(req,res)=>{
    console.log(`express app running on ${PORT}`)
  });
