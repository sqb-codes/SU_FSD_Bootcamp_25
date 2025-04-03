const Job = require("../models/Job");

exports.createJob = async(request, response) => {
    try {
        const {title, desc, salary, skills, companyName} = request.body;
        const job = new Job({title, desc, salary, skills, companyName});
        await job.save();   // saves data to MongoDB
        response.status(200).json({"msg":"Job inserted successfully"});
    } catch (error) {
        console.log("Error while creating new Job");
        response.status(500).json({"msg":"Job failed to insert in DB"});
    }
}

exports.deleteJob = async(request, response) => {
    
}

exports.updateJob = async(request, response) => {
    
}