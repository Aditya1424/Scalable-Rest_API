const express = require("express");

const router = express.Router();

const validate =
require("../middleware/validationMiddleware");

const {
  taskValidation
} =
require("../validators/taskValidator");

const authenticate =
require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

router.post(
  "/",
  taskValidation,
    validate,
  authenticate,
  createTask
);

router.get(
  "/",
  authenticate,
  getTasks
);

router.get(
  "/:id",
  authenticate,
  getTaskById
);

router.put(
  "/:id",
  authenticate,
  updateTask
);

router.delete(
  "/:id",
  authenticate,
  deleteTask
);

module.exports = router;