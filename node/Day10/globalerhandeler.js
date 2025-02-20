const express=require('express');
const app=express();
const PORT=8080;


app.get('/error',(req,res)=>{
  const err=new Error("this is error global middelware function");
err.status(500);
next(err);
})
app.use((err,req,res,next)=>{
console.log(err.stack);
res.status(err.status||500).json({
  success: false,
        message: err.message || "Internal Server Error",
        error:  err.stack 
});
});
app.listen(PORT,()=>{
  console.log(`expresss running on ${PORT}`);
})