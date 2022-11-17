
import express  from "express";
import mongoose from "mongoose"
import userRoute from "./routes/users.routes.js"
import { connectDB } from "./db.js";

const app = express()
connectDB()

app.use(express.json())
app.use(userRoute)

app.listen(4000)
console.log("Server in runnin port", 4000)