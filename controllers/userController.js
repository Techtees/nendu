const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
}



const registerUser = asyncHandler(
    async(req, res) => {
        const {name, email, password} = req.body
        
        // check inputs
        if(!name || !email || !password) {
            res.status(400)
            throw new Error ("Please fill all required fields")
        }

        //password validation
        if(password < 6) {
            res.status(400)
            throw new Error("password must be up to 6 chracters")
        }

        // check if user exist in the database
        const userExist = await User.findOne({email})

        if(userExist) {
            res.status(400)
            throw new Error ("Email exist please log in")
        }

        // if user does not exis create a new user

        const user = await User.create({
            name, email, password
        }) 

        const token = generateToken(user._id)

        if(user) {
            const {name, email, password, isAdmin} = user
            res.status(201).json({
                name, email, password, isAdmin, token
            })
        } else{
            res.status(400)
            throw new Error("Invalid user data")
        }

    }
)

const loginUser = asyncHandler(
    async(req, res) => {
        const {email, password} = req.body

        // check if input is entered
        if(!email || !password){
            res.status(400)
            throw new Error("Please enter crendential")
        }

        // check if user exist
        const user = await User.findOne({email})
        const passwordCheck = await user.password

        const token = generateToken(user._id)

        if(user && (password == passwordCheck)){
            const {name, email} = user
            res.status(200).json({
                name, email, token
            })

        } else {
            res.status(400) 
            throw new Error("Invalid login credentials")
        }
    }
)

module.exports = {
    registerUser,
    loginUser
}
