const{DataTypes}=require("sequelize");
const sequelize=require("../db");

  const Profile=sequelize.define('Profile',{
    bio:{
     type:DataTypes.STRING,
     alllowNull:false
    
  }, 
  userId:{
     type:DataTypes.INTEGER,
     alllowNull:false
  }
},{
  tableName: "profiles",
  timestamps: true,  
});


module.exports=Profile;
