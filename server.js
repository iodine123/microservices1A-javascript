const express = require('express');
const { Pool } = require('pg');

// Create a new Express application
const app = express();
const port = 3000;

// PostgreSQL database connection configuration
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'root_toor',
  host: process.env.POSTGRES_HOST || 'postgresql-service',
  database: process.env.POSTGRES_DB || 'todo_db',
  password: process.env.POSTGRES_PASSWORD || 'password',
  port: process.env.POSTGRES_PORT || 5432,
});

// Define routes
app.get('/getdata', async (req, res) => {
  try {
    // Query all tasks from the database
    const { rows } = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
