import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import isAuth from "./middleware/auth.js";
const app = express();
const port = 5000;

import product from "./routes/productRoute.js";
import user from "./routes/CreateUser.js";
import order from "./routes/orderRoute.js";
import chart from "./routes/chart.js";


connect("mongodb://127.0.0.1:27017/Wizaardsystems") 
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...",err));

app.use(json());
app.use(cors());
app.use(isAuth);
app.use("/api/product", product);
app.use("/api/users", user);
app.use("/order", order);
app.use("/api/admin",chart);
// app.use("/signup",user);
app.get('/protected-route', isAuth, (req, res) => {
  // Access authenticated user data from req.user if needed
  res.json({ message: 'Welcome, authenticated user!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
