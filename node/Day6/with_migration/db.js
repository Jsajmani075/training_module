// const{Sequelize}=require("sequelize");
// const sequelize=new Sequelize('test', 'postgres', '1234', {
//   host: "localhost",
//   dialect: "postgres",
//   logging: console.log,//console mae query dikhae gii
// });

// sequelize.authenticate()//it check that db connection is success or not 
// .then(()=>console.log("postgrese conected successfully"))
// .catch((error)=>(console.log("postgrese conection error:"),error));

// module.exports=sequelize;


const { Sequelize } = require("sequelize");
const config = require('./postgres-app/config/config.js');
const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: console.log,
});

sequelize.authenticate()
  .then(() => console.log("PostgreSQL connected successfully"))
  .catch((error) => console.log("PostgreSQL connection error:", error));

module.exports = sequelize;
