const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// initialize our app
const app = express()


const PORT = process.env.PORT || 5000


// middlewares
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

// create Route

app.get("/", (req,res) => {
    res.send("home")
})

// connect to db and start server
mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
})
.catch(err => console.log(err))

// mongoose
// .connect(process.env.MONGO_URI)
// .then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running on ${PORT}`)
//     })
// })
// .catch((err) => console.log(err))