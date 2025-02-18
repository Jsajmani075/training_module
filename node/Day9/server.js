const express=require('express');
const jwt = require('jsonwebtoken'); 
const app=express();
const PORT=8080;
app.use(express.json());
const user_route=require("./routes/UserRoute");
app.use('/user',user_route);

const secretKey='fwvwvw';  


function authenticateJWT(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from 'Authorization' header

  if (!token) {
      return res.status(403).send('Token required');
  }

  // Verify the token
  jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        console.error('JWT Error:', err); 
          return res.status(403).send('Invalid token');
      }
      req.user = user; // Attach user info to request object
      next(); 
  });
}

// Protected Route
app.get('/dashboard', authenticateJWT, (req, res) => {
  res.send(`Welcome ${req.user.email}, this is your dashboard.`);
});


app.listen(PORT,()=>{
console.log(`sever running on ${PORT}`)
});