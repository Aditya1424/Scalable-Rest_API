const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const taskRoutes = require("./routes/taskRoutes");
const swaggerUi =
require(
  "swagger-ui-express"
);

const swaggerSpec =
require("./config/swagger");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/tasks",taskRoutes);
const errorHandler = require("./middleware/errorMiddleware");
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerSpec
  )
);

app.get("/", (req, res) => {
  res.json({
    message: "API Running Successfully"
  });
});

app.use(errorHandler);

module.exports = app;