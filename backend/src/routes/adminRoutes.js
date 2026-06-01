const express = require("express");

const router = express.Router();

const authenticate =
require("../middleware/authMiddleware");

const authorize =
require("../middleware/roleMiddleware");

router.get(
  "/dashboard",
  authenticate,
  authorize("ADMIN"),
  (req, res) => {

    res.json({
      message:
      "Welcome Admin Dashboard"
    });

  }
);

module.exports = router;