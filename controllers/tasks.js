function getAllTasks(req, res) {
	res.send("get all task");
}

function createTask(req, res) {
	res.send("create task");
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
