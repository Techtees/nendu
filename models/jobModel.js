const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        // required:true,
        ref: "user"
    },
    cname: {
        type: String,
        required: [true, 'please enter company name']
    },
    website:{
        type: String,
        required: [true, 'please enter url']
    },
    title:{
        type: String,
        required: [true, 'please enter jon  title']
    },
    industry:{
        type: String,
        required: [true, 'please select industry'],
        enum:['FinTech','Agriculture', 'Helath', 'Others']
    },
    location: {
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
    link: {
        type: String,
        required: [true, 'Please enter link']
    },
    requirements: {
        type: String,
        required: [true, 'please enter job requirement']
    },
    description: {
        type: String,
        required: [true, 'please enter job description']
    }
    
})

const Job = mongoose.model("Job", jobSchema)

module.exports = Job