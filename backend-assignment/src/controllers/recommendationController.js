const Recommendation = require("../models/recommendation");

const getRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    const recommendations = await Recommendation.findOne({ userId }).populate(
      "recommendations.productId"
    );

    if (!recommendations) {
      return res
        .status(404)
        .json({ message: "Recommendations not found for this user" });
    }

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recommendations" });
  }
};

const createRecommendation = async (req, res) => {
  const { userId } = req.body;

  try {
    const existingRecommendation = await Recommendation.findOne({ userId });
    if (existingRecommendation) {
      return res
        .status(400)
        .json({ message: "Recommendations already exist for this user" });
    }

    const newRecommendation = new Recommendation({
      userId,
      recommendations: [],
    });
    await newRecommendation.save();
    res.status(201).json(newRecommendation);
  } catch (error) {
    res.status(500).json({ error: "Error creating recommendations" });
  }
};

const updateRecommendation = async (req, res) => {
  const { userId } = req.body;

  try {
    const recommendation = await Recommendation.findOneAndUpdate(
      { userId },
      req.body,
      { new: true }
    );

    if (!recommendation) {
      return res
        .status(404)
        .json({ message: "Recommendations not found for this user" });
    }

    res.json(recommendation);
  } catch (error) {
    res.status(500).json({ error: "Error updating recommendations" });
  }
};

const deleteRecommendation = async (req, res) => {
  const { userId } = req.params;

  try {
    const recommendation = await Recommendation.findOneAndDelete({ userId });

    if (!recommendation) {
      return res
        .status(404)
        .json({ message: "Recommendations not found for this user" });
    }

    res.json({ message: "Recommendations deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting recommendations" });
  }
};

module.exports = {
  getRecommendations,
  createRecommendation,
  updateRecommendation,
  deleteRecommendation,
};
