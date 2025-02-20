const{DataTypes}=require("sequelize");
const sequelize=require("../db");
const User=sequelize.define("User",{
  firstName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
  }
},
  {
    timestamps: true,  
  });

module.exports=User;