const Task = require("../models/Task");

exports.createTask = async (req, res) => {

  try {

    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      userId: req.user.id
    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getTasks = async (
  req,
  res
) => {

  const page =
    parseInt(req.query.page) || 1;

  const limit =
    parseInt(req.query.limit) || 10;

  const offset =
    (page - 1) * limit;

  let tasks;

  if (
    req.user.role === "ADMIN"
  ) {

    tasks = await Task.findAndCountAll({
      limit,
      offset
    });

  } else {

    tasks = await Task.findAndCountAll({
      where: {
        userId: req.user.id
      },
      limit,
      offset
    });

  }

  res.json({
    total: tasks.count,
    page,
    totalPages:
      Math.ceil(
        tasks.count / limit
      ),
    data: tasks.rows
  });

};

exports.getTaskById = async (req, res) => {

  try {

    const task =
      await Task.findByPk(
        req.params.id
      );

    if (!task) {

      return res.status(404).json({
        message: "Task not found"
      });

    }

    if (
      req.user.role !== "ADMIN" &&
      task.userId !== req.user.id
    ) {

      return res.status(403).json({
        message: "Forbidden"
      });

    }

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.updateTask = async (req, res) => {

  try {

    const task =
      await Task.findByPk(
        req.params.id
      );

    if (!task) {

      return res.status(404).json({
        message: "Task not found"
      });

    }

    if (
      req.user.role !== "ADMIN" &&
      task.userId !== req.user.id
    ) {

      return res.status(403).json({
        message: "Forbidden"
      });

    }

    await task.update(req.body);

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.deleteTask = async (req, res) => {

  try {

    const task =
      await Task.findByPk(
        req.params.id
      );

    if (!task) {

      return res.status(404).json({
        message: "Task not found"
      });

    }

    if (
      req.user.role !== "ADMIN"
    ) {

      return res.status(403).json({
        message:
        "Only admin can delete"
      });

    }

    await task.destroy();

    res.json({
      message:
      "Task Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};