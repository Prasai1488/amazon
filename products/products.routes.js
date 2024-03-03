import express from "express";
import mongoose from "mongoose";
import Product from "./products.model.js";

const router = express.Router();

// adding products to DB
router.post("/products/add", async (req, res) => {
  const newProduct = req.body;

  await Product.create(newProduct);

  res.status(200).send({
    message: "Product added successfully",
  });
});

//! getting all products lists
router.get("/all/products/lists", async (req, res) => {
  const newProduct = await Product.find();
  res.status(200).send(newProduct);
});

// ! get product details by id
router.get("/products/:id", async (req, res) => {
  const id = req.params.id;

  //   validating id is valid or not valid for getting product details
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Product not found" });
  }

  // if id is valid then getting product details:
  const requiredProduct = await Product.findById(id);
  res.status(200).send(requiredProduct);
});

// ! delete product by id

router.delete("/products/delete/:id", async (req, res) => {
  const id = req.params.id;

  //   validating id is valid or not valid for deleting product
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Product not found" });
  }

  // if id is valid then deleting product:
  await Product.findByIdAndDelete(id);
  res.status(200).send({
    message: "Product deleted successfully",
  });
});

// ! update product by id

router.put("/products/update/:id", async (req, res) => {
  const id = req.params.id;

  //   validating id is valid or not valid for deleting product
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Product not found" });
  }

  // if id is valid then deleting product:
  await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send({
    message: "Product updated successfully",
  });
});

export default router;
