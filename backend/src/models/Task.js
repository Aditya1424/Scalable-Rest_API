const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT
  },

  status: {
    type: DataTypes.ENUM(
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED"
    ),
    defaultValue: "PENDING"
  }
});

module.exports = Task;