const Task = require("../models/Task");

function getAllTasks(req, res) {
	res.send("get all task");
}

async function createTask(req, res) {
	const task = await Task.create(req.body);
	res.status(201).json({ task });
}

function getTask(req, res) {
	res.json({ id: req.params.id });
}

function updateTask(req, res) {
	res.send(req.body);
}

function deleteTask(req, res) {
	res.send("delete a task");
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask
};
