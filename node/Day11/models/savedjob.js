const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const SavedJob = sequelize.define(
  "SavedJob",
  {
    user_id: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    job_id: {  
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Jobs",
        key: "id",
      },
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {  
      type: DataTypes.ENUM("applied", "interviewing", "accepted", "rejected"),
      allowNull: false,
    },
  },
  {
    timestamps: true
  }
);

module.exports = SavedJob;
