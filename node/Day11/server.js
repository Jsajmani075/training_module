const express=require('express');
const app=express();
const PORT=8080;
const userRoute=require('./routes/userRoutes.js');
const jobRoute=require('./routes/jobRoutes.js');
const jobuserRoute=require('./routes/jobUserRoutes.js');
app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/job',jobRoute);
app.use('/api/jobuser',jobuserRoute);
app.listen(PORT,()=>{
    console.log(`express listen on ${PORT}`);
})