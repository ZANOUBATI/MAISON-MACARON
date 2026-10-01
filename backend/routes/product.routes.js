const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// CRUD routes
router.post("/", productController.createProduct);      // Create
router.get("/", productController.getProducts);        // Read all
// router.get("/:id", productController.getProduct);       // Read one
// router.put("/:id", productController.updateProduct);    // Update
// router.delete("/:id", productController.deleteProduct); // Delete

module.exports = router;