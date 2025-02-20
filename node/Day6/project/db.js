const {Sequelize}=require('sequelize');
const sequelize = new Sequelize(
  "userdetails","postgres","1234",{
    host:"127.0.0.1",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Connection error:", err));

module.exports = sequelize;