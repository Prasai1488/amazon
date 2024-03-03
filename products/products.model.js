import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  expiryDate: Date,
  freeShipping: Boolean,
  brand: String,
  quantity: Number,
});

// create table for product

const Product = mongoose.model("Product", productSchema);

export default Product;