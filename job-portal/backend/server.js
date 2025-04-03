require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// cors - cross-origin resource sharing
const {MONGO_USERNAME, MONGO_PASSOWRD, MONGO_DB_NAME} = require("./config/config");
const app = express();
const jobRoutes = require("./routes/jobRoutes");

app.use(cors());
app.use(express.json());

const PORT = 1234;
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSOWRD}@cluster0.8hnkc7l.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected Successfully..."))
.catch((error) => console.log("Error while connecting mongoDB",error));

// http://localhost:1234/api/job/create
// http://localhost:1234/api/job/delete
// http://localhost:1234/api/job/update
app.use("/api/job", jobRoutes);

app.listen(PORT, () => console.log("Server started at :",PORT));