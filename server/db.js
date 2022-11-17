import mongoose from "mongoose";

export async function connectDB() {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
      console.log("Connected to Mongo");
    });
 
}
