import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import usersRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"


const app = express()
dotenv.config()



//connect to mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connected to mongoDB.")
  } catch (error) {
    console.log(error)
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})



//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

// routes
app.use("/api/users", usersRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})


const port = 8800
app.listen(port, ()=>{
    connect()
    console.log('port:',port)
    console.log('Connected to Back-end!')
})
