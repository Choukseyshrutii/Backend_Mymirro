const express = require("express");
const {
  submitUserResponse,
  getUserResponses,
} = require("../controllers/userResponseController");

const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, submitUserResponse);
router.get("/", authMiddleware, getUserResponses);

module.exports = router;
