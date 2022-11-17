import mongoose from "mongoose";

export async function connectDB() {
    try {
        const db = await mongoose.connect('mongodb+srv://socialApp:alba-lucia@cluster0.84xnxfx.mongodb.net/test')
        console.log('Connected to')
    } catch (error) {
        console.error(error)
    }
}