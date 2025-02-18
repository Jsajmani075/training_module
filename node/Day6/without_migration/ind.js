const sequelize = require("../db");
const User = require("./User");
sequelize.sync({ force: false }) 
  .then(() => console.log("Database & tables synced"))
  .catch((err) => console.error("Sync error:", err));

module.exports = { User };