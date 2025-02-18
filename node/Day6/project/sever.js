const express=require('express');
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./db");
const PORT=8080;
const app = express();
app.use(express.json());
app.use('/user',userRoutes);
app.listen(PORT,(req,res)=>[
  console.log(`express running on ${PORT}`)
]);
