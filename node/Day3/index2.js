//excercise 2
const express =require ('express');
const app=express();
const PORT=8080;
app.use(express.json());

//route parameter
app.get(('/student/:id'),(req,res)=>{
const {id}=req.params;
res.send(`your student id is ${id}`);
})
//query parameter
app.get(('/search'),(req,res)=>{
  const {name}=req.query;
  res.send(`searching for appliance ${name}`);
  })
//  custom error handler
app.get(('/errorhandling'),(req,res,next)=>{
  try {
    throw new Error("custom error handler");
} catch (err) {
    next(err); 
}
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
});

app.listen(PORT,()=>{
  console.log(`express is on ${PORT}`);
})