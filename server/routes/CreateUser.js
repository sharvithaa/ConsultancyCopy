import { Router } from "express";
import { genSalt, hash, compare } from "bcrypt";
import User from "../models/User.js";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin || false, // Default to false if isAdmin is not provided
    });

    const existingUser = await User.findOne({ email: newUser.email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await genSalt(10);
    newUser.password = await hash(newUser.password, salt);

    await newUser.save();
    const token = newUser.generateAuthToken();

    res.json({ token, id: newUser.id, isAdmin: newUser.isAdmin });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = user.generateAuthToken();

    res.json({ token, userId: user.id, isAdmin: user.isAdmin });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
