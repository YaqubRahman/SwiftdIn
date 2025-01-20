// All comments are there to aid me (primarily) or anyone else in understanding things

// Importing the required packages
const express = require('express'); // Web framwork for Node.js
const mongoose = require('mongoose'); // MongoDB object modeling tool
const cors = require('cors'); // Enables Cross-Origin Resource Sharing
require('dotenv').config();// Loads environment variables from .env file

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());            // Allows frontend to communicate with backend
app.use(express.json());    // Parses incoming JSON requests
