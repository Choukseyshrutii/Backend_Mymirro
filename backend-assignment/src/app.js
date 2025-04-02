const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/recommendation", require("./routes/recommendationRoutes"));
app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/response", require("./routes/userResponseRoutes"));

module.exports = app;
