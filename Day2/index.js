const express = require('express');
const app = express();
const PORT=8080;
app.get('/', (req, res) => {
  res.status(200);
    res.send('hello ji kaise hoo,this is day 2 module');
});

const os = require('os');

console.log('Platform:', os.platform());  
console.log('Architecture:', os.arch());  
console.log('Total Memory:', os.totalmem());

app.listen(PORT,(req,res)=>{
console.log(`express start hogya hai on ${PORT}`)
});
