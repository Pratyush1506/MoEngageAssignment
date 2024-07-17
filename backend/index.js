const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());


// Connect to the SQLite database and initialize it
const db = new sqlite3.Database('./data.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to database');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Could not create table', err);
      } else {
        console.log('Table "users" is ready');
      }
    });

    // Create lists table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS lists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      codes TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      user_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`, (err) => {
      if (err) {
        console.error('Could not create lists table', err);
      } else {
        console.log('Table "lists" is ready');
      }
    });
  }
});

app.get('/', (req,res)=>{
    return res.status(200).send("Hello world");
})

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
    if (err) {
      return res.status(500).send('Error checking user');
    }
    if (row) {
      return res.status(400).send('User already exists');
    }

    // Insert new user
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], function (err) {
      if (err) {
        return res.status(500).send('Error creating user');
      }
      res.status(201).send('User created');
    });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password is correct
  db.get('SELECT id FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      return res.status(500).send('Error checking user');
    }
    if (row) {
      // Return the user ID
      res.status(200).json({ id: row.id, message: 'Login successful' });
    } else {
      return res.status(401).send('Invalid credentials');
    }
  });
});

//Logout endpoint
app.post('/logout', (req, res) => {
  // Perform logout actions if needed (e.g., clear session, etc.)
  res.status(200).send('Logged out successfully');
});

// Save list endpoint
app.post('/lists', (req, res) => {
  const { name, codes, createdAt, userId } = req.body;
  const codesString = JSON.stringify(codes);

  db.run('INSERT INTO lists (name, codes, createdAt, user_id) VALUES (?, ?, ?, ?)', [name, codesString, createdAt, userId], function (err) {
    if (err) {
      return res.status(500).send('Error saving list');
    }
    res.status(201).send({ message: 'List saved successfully', id: this.lastID });
  });
});


// Fetch lists for a user
app.get('/lists/:userId', (req, res) => {
  const { userId } = req.params;

  db.all('SELECT * FROM lists WHERE user_id = ?', [userId], (err, rows) => {
    if (err) {
      return res.status(500).send('Error fetching lists');
    }
    res.status(200).json(rows);
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
