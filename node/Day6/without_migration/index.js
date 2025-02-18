const express=require('express');
const app=express();
const UserRoute =require("../routes/UserRoutes")
const PORT=8080;
//middleware
app.use(express.json());
//routes
app.use("/users",UserRoute);

//server starting
app.listen(PORT,()=>{
  console.log(`express run on ${PORT}`);
})

