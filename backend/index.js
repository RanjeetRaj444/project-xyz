const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/user.routes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT || 8080, async function () {
	console.log("Server is running on port", process.env.PORT || "8080");

	await mongoose.connect(process.env.mongo_url);
	console.log("Database is connected.");
});
