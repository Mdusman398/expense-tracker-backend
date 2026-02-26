require("dotenv").config();
const express = require("express")
const cors = require("cors")
const path =  require("path");
const cookieParser = require("cookie-parser")
const app = express()
const connectDb = require("./config/db")
const authRouter = require("./routes/authRoutes")
const incomeRouter = require("./routes/incomeRoutes")
const expenseRouter = require("./routes/expenseRoutes")
const dashboardRouter = require("./routes/dashboardRoutes")
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
connectDb()
const PORT = process.env.PORT || 8000;
app.use("/api", authRouter )
app.use("/api" , incomeRouter)
app.use("/api", expenseRouter)
app.use("/api", dashboardRouter);
app.use("/uploads",express.static(path.join(__dirname, "uploads")))

app.listen(PORT, () => {
    console.log(`server is running on Port : ${PORT}`)
})