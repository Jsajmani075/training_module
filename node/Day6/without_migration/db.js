const{Sequelize}=require("sequelize");
const sequelize=new Sequelize(db_name,user_name,password,{
  host: "localhost",
  dialect: "postgres",
  logging: true,//console mae query dikhae gii
});

sequelize.authenticate()//it check that db connection is success or not 
.then(()=>console.log("postgrese conected successfully"))
.catch((error)=>console.log("postgrese conection error:"),error);

module.exports=sequelize;