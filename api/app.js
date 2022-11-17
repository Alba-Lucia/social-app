import express from "express";
import fileUpload from "express-fileupload";
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/users.routes.js'
import postsRoutes from './routes/posts.routes.js'

const app = express()

//middlewares
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

// route
app.use("/api/users", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postsRoutes)

export default app