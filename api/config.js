import dotenv from "dotenv";

dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URL

export const PORT = (process.env.PORT)

