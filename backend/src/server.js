require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/db");
const user = require("./models/User");
const User = require("./models/User");
const Task = require("./models/Task");


const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await sequelize.authenticate();

    console.log("Database Connected");
    user("./models/User");

        User.hasMany(Task, {
    foreignKey: "userId"
    });

    Task.belongsTo(User, {
    foreignKey: "userId"
    });

    await sequelize.sync();

    console.log("Tables Synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error(error);
  }
}

startServer();