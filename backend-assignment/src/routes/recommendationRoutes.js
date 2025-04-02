const express = require("express");
const {
  getRecommendations,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
} = require("../controllers/recommendationController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:userId", getRecommendations);
router.post(
  "/",
  authMiddleware,
  authMiddleware.adminMiddleware,
  createRecommendation
);
router.put(
  "/",
  authMiddleware,
  authMiddleware.adminMiddleware,
  updateRecommendation
);
router.delete(
  "/:userId",
  authMiddleware,
  authMiddleware.adminMiddleware,
  deleteRecommendation
);

module.exports = router;
