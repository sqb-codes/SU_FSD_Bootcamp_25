const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: String,
    salary: Number,
    skills: String,
    companyName: String
});

module.exports = mongoose.model("Job", JobSchema);