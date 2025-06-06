const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));

// Connect DB and Start Server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`)))
    .catch(err => console.log(err));
