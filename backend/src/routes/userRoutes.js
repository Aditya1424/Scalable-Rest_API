const express = require("express");

const router = express.Router();

const authenticate =
  require("../middleware/authMiddleware");

const {
  profile
} = require("../controllers/userController");

router.get(
  "/profile",
  authenticate,
  profile
);

module.exports = router;