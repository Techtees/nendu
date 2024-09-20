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

const getJobs = asyncHandler(
    async(req, res) => {

        const jobs = await Job.find({user: req.user.id})
        console.log("Jobs found:", jobs);

        res.status(200).json(jobs)
    }
)

const getJob = asyncHandler(
    async (req, res)  => {
        const job = await Job.findById(req.params.id)

        if(!job) {
            res.status(404)
            throw new Error("Job not found")
        }

        res.status(200).json(job)

    }


)

const deleteJob = asyncHandler(
    async(req, res) => {
      const job = await Job.findById(req.params.id)

    if(!job) {
        res.status(404)
        throw new Error("Job not found")
    }

    if(job.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }

    await job.deleteOne()

    res.status(200).json(job);
    }
)

const updateJob = asyncHandler(
    async(req, res) =>{

        const {cname, website, title, industry, location, experience, qualification, deadline, link, requirements, description} = req.body

        const {id} = req.params

        const job = await Job.findById(id)

        if(!job){
            res.status(404)
            throw new Error("Job not found")
        }

        if(job.user.toString() !== req.user.id){
            res.status(401)
            throw new Error("User not authorized")
        }

        const updatedJob = await Job.findByIdAndUpdate(
            {_id: id},
            {
                cname,
                website,
                title,
                industry,
                location,
                experience,
                qualification,
                deadline,
                link,
                requirements,
                description
            },
            {
                new: true,
                runValidators: true
            }
        )


        res.status(201).json(updatedJob)



    }
)

module.exports = {
    createJob,
    getJobs,
    getJob,
    deleteJob,
    updateJob
}