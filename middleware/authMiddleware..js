const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(
    async(req, res, next) => {
        let token;

        // check if token exist in the authorizarion header
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            console.log("it is")
            try {
                // check token from header
                 token = req.headers.authorization.split(' ')[1]

                //  verufy token
                const decoded = jwt.verify(token, process.env.JWT_SECRET)

                console.log('this is decoded id')
                console.log(decoded)

                // get user from token
                req.user = await User.findById(decoded.id).select('-password')
                console.log(req.user)

                next()
            } catch (error) {
                res.status(400)

                throw new Error("not authorized")
            }
        } else {
            res.status(401)
            throw new Error("not authorized in")
        }
    }
)

module.exports = protect