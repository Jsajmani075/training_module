

//custom morgan
// morgan.token('token_name',(req,res)=>{
//   return value;
// })
//custom morgan
// app.use(morgan(':method :url :status - :response-time ms - :token_name'));

//inbuilt morgan
// app.use(morgan('dev'));


const express = require('express');
const app = express();
const PORT = 8080;
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Create log streams for different logs
const LogStream = fs.createWriteStream(path.join(__dirname, 'completemorgan.log'), { flags: 'a' });
const errorLogStream = fs.createWriteStream(path.join(__dirname, 'errormorgan.log'), { flags: 'a' });

// Custom Morgan Token (Optional)
morgan.token('req-id', (req, res) => {
  return req.headers['x-request-id'] || 'No-Request-ID'; 
});


// Morgan Middleware
app.use(morgan('dev', { stream: LogStream })); // Logs all requests
app.use(morgan('combined', { 
  stream: errorLogStream, 
  skip: (req, res) => res.statusCode < 400 // Logs only errors (status >= 400)
}));

// custom morgan
app.use(morgan(':method :url :status - :response-time ms - ReqID: :req-id', { stream: LogStream })); // All requests
app.use(morgan(':method :url :status - :response-time ms - ReqID: :req-id', { 
  stream: errorLogStream, 
  skip: (req, res) => res.statusCode < 400 
}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello ji, kaise ho?'); // Fixed missing response
});

app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
