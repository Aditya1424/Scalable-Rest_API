const { body } = require("express-validator");

exports.taskValidation = [

  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .optional()
    .isString(),

  body("status")
    .optional()
    .isIn([
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED"
    ])
];