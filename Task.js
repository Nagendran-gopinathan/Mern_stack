const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    assignedTo: { type: String, required: true }, // Can be updated to ObjectId if referencing User
    status: { type: String, enum: ['not-started', 'in-progress', 'completed'], default: 'not-started' },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
