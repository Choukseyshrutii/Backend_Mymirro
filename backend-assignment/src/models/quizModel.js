const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  questions: [
    {
      name: {
        type: String,
        required: true,
      },
      questionText: {
        type: String,
        required: true,
      },
      options: [
        {
          optionText: {
            type: String,
            required: true,
          },
          value: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);
