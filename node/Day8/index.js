const express=require('express');
require("./models/index.js");
const app=express();
const PORT=8080;
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use(express.json());
app.use('/user',userRoutes);
app.use('/post',postRoutes);
app.use('/profile',profileRoutes);

app.listen(PORT,(req,res)=>{
  console.log(`server listen on ${PORT}`);
})