const express = require('express');
const app = express();
const port = 8080;

// Custom Middleware Function
function Details(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(` URL: ${req.url}`);
  next();  
}


app.use(Details);


app.get('/', (req, res) => {
  res.send('this is day 4 module ');
});

app.listen(port, () => {
  console.log(`express running on ${port}`);
});
