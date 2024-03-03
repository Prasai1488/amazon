import express from "express";
import Seller from "./seller.model.js";
import mongoose from "mongoose";

const router = express.Router();

//! adding seller to DB
router.post("/seller/add", async (req, res) => {
  const newSeller = req.body;

  // if seller with existing email, throw error
  const existingSeller = await Seller.findOne({ email: newSeller.email });
  if (existingSeller) {
    res.status(400).send({
      message: "Seller already exists",
    });
  }

  await Seller.create(newSeller);
  res.status(200).send({
    message: "Seller added successfully",
  });
});

// ! get all seller details
router.get("/all/sellers", async (req, res) => {
  const newSeller = await Seller.find();
  res.status(200).send(newSeller);
});

// ! get seller details by id
router.get("/seller/details/:id", async (req, res) => {
  const id = req.params.id;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Seller not found" });
  }

  // if id is valid then get seller details
  const requiredSeller = await Seller.findById(id);
  res.status(200).send(requiredSeller);
});

//! update seller details by id

router.put("/seller/update/:id", async (req, res) => {
  const id = req.params.id;
  // check if id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send({ message: "Seller not found" });
  }
  // if id is valid then update seller details
  await Seller.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).send({
    message: "Seller updated successfully",
  });
});



export default router;
