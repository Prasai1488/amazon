import express from "express";
import connectDB from "./connect.db.js";
import productRoutes from "./products/products.routes.js";
import sellerRoutes from "./seller/seller.routes.js";

const app = express();

app.use(express.json());

// database connection
connectDB();

// registering routes
app.use(productRoutes);
app.use(sellerRoutes);

// server and port allocating
const port = 8200;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
