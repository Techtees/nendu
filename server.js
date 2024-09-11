const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoute")
const jobRoute = require("./routes/jobRoute")
const errorHandler = require("./middleware/errorMiddleware")

// initialize our app
const app = express()


const PORT = process.env.PORT || 5005


// middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

// Route middleware
app.use("/api/users", userRoute)
app.use("/api/jobs", jobRoute)

// create Route
app.get("/", (req,res) => {
    res.send("home")
})

app.use(errorHandler)
// connect to db and start server
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
})
.catch(err => console.log(err))
