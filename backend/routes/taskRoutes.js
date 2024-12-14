const express = require('express');
const Task = require('../models/Task'); // Import Task model
const router = express.Router();
const { v4: uuidv4 } = require('uuid')

// Fetch all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({ deleted_at: null });
    // console.log(tasks)
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Add a new task
router.post('/addtasks', async (req, res) => {
  const { task_name } = req.body;
  try {
    const uid = uuidv4();
    const task = new Task({ task_name, uid });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding task' });
  }
});

// Update a task
router.put('/updatetasks/:id', async (req, res) => {
  const { id } = req.params;
  const { task_name, completed, important } = req.body;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.task_name = task_name || task.task_name;
    task.completed = completed !== undefined ? completed : task.completed;
    task.important = important !== undefined ? important : task.important;
    task.updated_at = Date.now(); // Update the updated_at field

    await task.save();
    res.json(task); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating task' });
  }
});

// Delete a task (updating `deleted_at`)
router.delete('/deletetasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.deleted_at = Date.now();
    await task.save();

    res.json({ message: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting task' });
  }
});

module.exports = router;
