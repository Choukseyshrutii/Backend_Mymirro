const UserResponse = require("../models/userResponseModel");
const Quiz = require("../models/quizModel");

const submitUserResponse = async (req, res) => {
  try {
    const { quizId } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    const userResponse = new UserResponse({
      user: req.user._id,
      quiz: quizId,
    });

    await userResponse.save();
    res.status(201).json(userResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserResponses = async (req, res) => {
  try {
    const responses = await UserResponse.find({
      user: req.user.id,
    }).populate("quiz");
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitUserResponse,
  getUserResponses,
};
