const express = require("express");
const {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, authMiddleware.adminMiddleware, createQuiz);
router.get("/", getAllQuizzes);
router.get("/:id", getQuizById);
router.put("/:id", authMiddleware, authMiddleware.adminMiddleware, updateQuiz);
router.delete(
  "/:id",
  authMiddleware,
  authMiddleware.adminMiddleware,
  deleteQuiz
);

module.exports = router;
