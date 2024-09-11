const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    company_name: {
        type: String,
        required: [true, 'please enter company name']
    },
    company_website:{
        type: String,
        required: [true, 'please enter url']
    },
    job_title:{
        type: String,
        required: [true, 'please enter jon  title']
    },
    industry:{
        type: String,
        required: [true, 'please select industry'],
        enum:['FinTech','Agriculture', 'Helath', 'Others']
    },
    company_website:{
        type: String,
        required:[true, 'please enter company website']
    },
    job_location: {
        type: String,
        require: true
    },
    experience:{
        type: String,
        required: [true, 'please select experience level'],
        enum:["Entry", "Senior", "Mid"]
    },
    qualification:{
        type: String,
        required: [true, 'please enter qualifications']
    },
    deadline:{
        type: String,
        required: [true, 'please enter date']
    },
    job_link: {
        type: String,
        required: [true, 'Please enter link']
    },
    job_req: {
        type: String,
        required: [true, 'please enter job requirement']
    },
    job_desc: {
        type: String,
        required: [true, 'please enter job description']
    }
    
})

const Job = mongoose.model("Job", jobSchema)

module.exports = Job