const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Job = require("../models/jobModel")


const createJob = asyncHandler(
    async(req, res) => {
       const {cname, website, title, industry, location, experience, qualification, deadline, link, description, requirements }= req.body

       const user = await User.findById(req.user.id)
       if(!user) {
        res.status(400)
        throw new Error("User not found")
       }

       const jobs = await Job.create({
        cname, 
        website, 
        title, 
        industry, 
        location, 
        experience, 
        qualification, 
        deadline, 
        link, 
        description,
        requirements,
        userId: req.user.id 
       })

       res.status(200).json(jobs)
    }
)



module.exports = {
    createJob
}