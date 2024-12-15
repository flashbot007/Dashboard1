const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./config/db'); // Import DB connection
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors')
const app = express(); 

// Connect to MongoDB
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', taskRoutes); // Use task routes under /api path

// Start the server
app.listen(5000, () => {
  console.log('Server running on https://dashboard1-cg7c.onrender.com');
});
