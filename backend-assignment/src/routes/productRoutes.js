const express = require("express");
const {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const { adminMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, addProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
