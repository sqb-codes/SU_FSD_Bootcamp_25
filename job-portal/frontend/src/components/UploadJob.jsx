import { useState } from "react";
import axios from "axios";

export const UploadJob = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [skills, setSkills] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [salary, setSalary] = useState(0);
    const JOB_URL = "http://localhost:1234/api/job";

    const uploadJobHandler = async () => {
        try {
            await axios.post(JOB_URL + "/create", {title, desc, salary, skills, companyName})
            alert("Job uploaded...");
            setTitle("");
            setDesc("");
            setCompanyName("");
            setSalary();
            setSkills("");
        } catch (error) {
            console.log("Failed to insert job..", error);
            alert("Failed...");
        }
    }

    const deleteJobHandler = async () => {
        try {
            await axios.post(JOB_URL + "/delete");
        } catch (error) {
            
        }
    }

    return (
        <div className="bg-gray-100 p-7 shadow-lg">
            <h2 className="text-2xl text-center mb-5">Upload Job</h2>
            <div className="my-4">
                <label>Enter Job Title</label>
                <input 
                    type="text"
                    placeholder="Enter Job Title"
                    className="shadow-md ring-1 w-100 block p-2 bg-white"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div className="my-4">
                <label>Enter Job Description</label>
                <textarea 
                    placeholder="Enter Job Description"
                    className="shadow-md ring-1 w-100 block p-2 bg-white"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                ></textarea>
            </div>

            <div className="my-4">
                <label>Enter Company Name</label>
                <input 
                    type="text"
                    placeholder="Enter Company Name"
                    className="shadow-md ring-1 w-100 block p-2 bg-white"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                />
            </div>

            <div className="my-4">
                <label>Enter Skills (Comma Separated)</label>
                <input 
                    type="text"
                    placeholder="Enter Skills"
                    className="shadow-md ring-1 w-100 block p-2 bg-white"
                    onChange={(e) => setSkills(e.target.value)}
                    value={skills}
                />
            </div>

            <div className="my-4">
                <label>Enter Salary</label>
                <input 
                    type="text"
                    placeholder="Enter Salary"
                    className="shadow-md ring-1 w-100 block p-2 bg-white"
                    onChange={(e) => setSalary(e.target.value)}
                    value={salary}
                />
            </div>

            <div className="my-6">
                <button
                    onClick={uploadJobHandler}
                    className="shadow-lg ring-1 w-100 block p-2 bg-red-200"
                >Upload Job</button>
            </div>
        </div>
    )
}