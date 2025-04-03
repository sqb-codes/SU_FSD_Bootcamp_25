const express = require("express");
const router = express.Router();

const {createJob, deleteJob, updateJob} = require("../controllers/jobController");

router.post("/create", createJob);
router.delete("/delete", deleteJob);
router.patch("/update", updateJob);

module.exports = router;