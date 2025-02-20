const sequelize = require("../db");
const User = require("./user");
const Post = require("./post");
const Profile = require("./profile");

// Define associations here
User.hasMany(Post, { foreignKey: "userId", as: "posts", onDelete: "CASCADE" });
User.hasOne(Profile, { foreignKey: "userId", as: "profile", onDelete: "CASCADE" });

Post.belongsTo(User, { foreignKey: "userId", as: "user" });
Profile.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = { sequelize, User, Post, Profile };