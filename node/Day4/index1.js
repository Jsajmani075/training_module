//AJV
const express = require('express');
const AJV = require('ajv');
const app = express();
const port = 8080;
app.use(express.json());
const ajv =new AJV(); //ajv is a object for accessing AJV class

const schema={
  type:'object',
  properties:{
    name:{type:"string"},
    age:{type:'integer',minimum:18}
  },
required:['name','age']
};

const validate=ajv.compile(schema);
//yae schema ko argument leat hai and it return function in which we pass data to check whether data is validate or not

function validator(req,res,next){
  const valid=validate(req.body);
  if(!valid){
    return res.status(400).json({ errors: validate.errors });
  }
  next();
}

app.post('/student',validator,(req,res,next)=>{
  res.status(200);
  res.send('Data is valid');
});

app.listen(port, () => {
  console.log(`express running on ${port}`);
});
