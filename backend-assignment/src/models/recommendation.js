const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  recommendations: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      reason: { type: String, default: "Based on your interest" },
      score: { type: Number, default: 1 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Recommendation", recommendationSchema);
