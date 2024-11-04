const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Create Task
router.post('/', authMiddleware, async (req, res) => {
    console.log(req,'errrrrr')
    try {
        const { title, assignedTo, status, priority, startDate, endDate, description } = req.body;
        
        const task = new Task({
            title,
            assignedTo,
            status,
            priority,
            startDate,
            endDate,
            description,
            userId: req.user.id
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Tasks
router.get('/', authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
