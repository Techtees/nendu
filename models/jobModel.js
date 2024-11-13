const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
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
    salary : {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'please enter job description']
    }
    
},{
    timestamps: true
}
)

const Job = mongoose.model("Job", jobSchema)

module.exports = Job