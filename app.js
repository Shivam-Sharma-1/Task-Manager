const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

async function start() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log("server is running..."));
	} catch (error) {
		console.log(error);
	}
}

start();
