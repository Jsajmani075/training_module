//midleware
const express =require ('express');
const app=express();
const PORT=8080;

app.use((req,res,next)=>{
  console.log(`i am using middleware in my express`);
  next();
})
//middleware

 app.get('/',(req,res)=>{
  res.status(200);
    res.send('hello ji kaise hoo,this is day 3 module');
 })

//route parameters 

app.get('/user/:id', (req, res, next) => {
  res.status(200);
  res.send(` URL is: ${req.originalUrl}`)
})

app.listen(PORT,()=>{
  console.log(`express is on ${PORT}`);
})