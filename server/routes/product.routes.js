import express from "express";
import products from "../controllers/product.controllers.js";

const router = express.Router();
// Create a new Product
// router.post("/", products.create);

// Retrieve all Products
router.get("/", products.findAll);

// Retrieve a single Product by id
router.get("/:id", products.findOne);

// Update a Product
// router.put("/:id", products.update);

// Delete a Product
// router.delete("/:productId", products.remove);

export default router;
