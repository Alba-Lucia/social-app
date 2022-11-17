// const router = require("express").Router();
// const User = require("../models/User");

// router.post("/register", (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   try {
//             const user = newUser.save()
//             res.status.apply(200).json(user)
//         } catch (error) {
//             console.log()
//         }
// });

// module.exports = router;

import { Router } from "express";
import User from "../models/User.js";

const router = Router();

export const createUser = (req, res) => {
  const post = new User({ username, password, email });
};

export default router;
