//excercise-1
const express =require ('express');
const app=express();
const PORT=8080;
app.use(express.json());

//get request 
app.get('/',(req,res)=>{
  res.status(200);
  res.send(`this is get method `);
});
 
//post request
app.post('/user',(req,res)=>{
  const mydata=req.body;
  res.json({Message:"post method",postdata:mydata});
});

//put request
app.put('/user/:id',(req,res)=>{
  const {id}=req.params;
  const mydata=req.body;
  res.json({Message:`put method my old id is ${id}`,mynewidis :mydata});
});

//delete request
app.delete('/user/:id',(req,res)=>{
  const {id}=req.params;
  res.json({Message:`delete  method this id ${id} is been deleted`});
});

app.listen(PORT,()=>{
  console.log(`express is on ${PORT}`);
})