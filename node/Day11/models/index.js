const sequelize = require("../db");
const User = require("./user");
const Job = require("./job");
const SavedJob = require("./savedjob");

// Define associations here

User.belongsToMany(Job, { through: "SavedJob",foreignKey: "User_id", as: "user" });
Job.belongsTo(User, { through: "SavedJob",foreignKey: "Job_id", as: "job" });

module.exports = { sequelize, User,Job,SavedJob};