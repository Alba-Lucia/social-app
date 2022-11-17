import { connectDB } from "./db.js";
import app from "./app.js"

connectDB()

app.listen(4000)
console.log('Servidos andando...', 4000)
