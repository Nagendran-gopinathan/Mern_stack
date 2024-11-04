const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User Routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// Task Routes
const taskRoutes = require('./routes/task');
app.use('/api/tasks', taskRoutes);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
