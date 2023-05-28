const express = require("express");
const app = express();

const routes = require("./routes/tasks");

app.get("/", (req, res) => {
	res.send("Task Manager");
});

const port = 3000;
app.listen(port);
