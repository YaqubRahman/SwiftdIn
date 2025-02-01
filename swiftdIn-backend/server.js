// All comments are there to aid me (primarily) or anyone else in understanding things

// Importing the required packages
const express = require('express'); // Web framwork for Node.js
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Enables Cross-Origin Resource Sharing
require('dotenv').config();// Loads environment variables from .env file

const authRoutes = require('./src/routes/authRoutes');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());            // Allows frontend to communicate with backend
app.use(express.json());    // Parses incoming JSON requests


app.use('/auth', authRoutes);

// Basic test route to verify server is working
app.get('/test', (req, res) => {
    res.json({message: "Backend is working! "});
})

// Set up port - uses enviroment vairbale or defaults to 5000
const PORT = process.env.PORT || 5000


// Connect to MonogDB and start server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });