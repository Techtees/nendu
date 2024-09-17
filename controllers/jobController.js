const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const Job = require("../models/jobModel")


const createJob = asyncHandler(
    async(req, res) => {
       const {cname, website, title, industry, location, experience, qualification, deadline, link, description, requirements }= req.body

       const userExist = await User.findById(req.user.id)
       if(!userExist) {
        res.status(400)
        throw new Error("User not found")
       }

       const jobs = await Job.create({
        user: req.user.id, 
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
       })

       res.status(200).json(jobs)
    }
)

const getJob = asyncHandler(
    async(req, res) => {

        const user = await User.findById(req.user._id)

        if(!user){
            res.status(400)
            throw new Error("User not found")
        }
        console.log("Fetching jobs for user:", req.user._id);

        const jobs = await Job.find()
        console.log("Jobs found:", jobs);

        res.status(200).json(jobs)
    }
)

module.exports = {
    createJob,
    getJob
}