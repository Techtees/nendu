const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type:String,
    require: [true, "Please add an name"]
  },
  email: {
    type: String,
    require: [true, "Please add your mail"],
    unique: true,
    trim: true,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'
    ],
  },
  password: {
    type: String,
    require: true,
    minLength: [6, "password must be up to 6 characters"]
  },
  isAdmin:{
    type: Boolean,
    default: false,
  }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports =  User  