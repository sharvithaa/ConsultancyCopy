// Import necessary modules
import { Router } from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Orders from "../models/order.js";

const router = Router();

// Route to serve admin page
router.get("/admin", async (req, res) => {
  try {
    // Get user count from the database
    const userCount = await User.countDocuments();
    const productCount= await Product.countDocuments();
    const ordersCount=await Orders.countDocuments();
    // Send user count as JSON data
    res.json({ userCount,productCount,ordersCount });

  } catch (error) {
    console.error("Error retrieving user count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
