
const{DataTypes}=require("sequelize");
const sequelize=require("../db");
const Job=sequelize.define("Job", {

  title: {
          type:DataTypes.STRING,
          allowNull:false        
      },
      company: {
      type:DataTypes.STRING,
          allowNull:false,
    },
    location: {
      type:DataTypes.STRING,
          allowNull:false,
    },
    experience_level: {
      type:DataTypes.INTEGER,
          allowNull:false,
    },
    description: {
      type:DataTypes.TEXT,
          allowNull:false,
    },
    expire_days: {
      type:DataTypes.INTEGER,
          allowNull:false,
    },
    },
  {
    timestamps: true,  
  });
  
module.exports=Job;