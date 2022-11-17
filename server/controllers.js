import { Router } from "express";
import User from "./models/User.js"
import mongoose from "mongoose"


const router = Router();

export const createUser = async (req, res) => {
    const { username, password, email } = req.body

    const newUser = new User({username, password, email})
    await newUser.save()
    return res.json(newUser)
}

export default router;
