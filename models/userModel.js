const mongoose = require("mongoose")
const { type } = require("os")

const userSchema = mongoose.Schema({
  name: {
    type:String,
    require: [true, "Please add an name"]
  },
  email: {
    type: String,
    require: [true, "Please add your mail"]
  }
})

const User = mongoose.model("User", userSchema)

module.exports =  User  