import express from "express";
import { getProducts, getProductById, updateProduct, deleteProduct, createProduct } from "../controllers/productControler.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
