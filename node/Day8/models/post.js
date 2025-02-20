
const{DataTypes}=require("sequelize");
const sequelize=require("../db");
  const Post = sequelize.define('Post', {
    title: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },userId:{
      type:DataTypes.INTEGER,
      alllowNull:false
   }
  },{
    tableName: "posts",
    timestamps: true,  
  });

  
  

module.exports=Post;