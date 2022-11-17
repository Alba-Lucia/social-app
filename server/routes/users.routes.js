import express from "express";
import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username, 
    email: req.body.email,
    password: req.body.password, 
  })
  try {
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
});

export default router;
