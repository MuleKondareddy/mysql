const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

// Connect to MySQL database
database.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const getUserQuery = `
    SELECT * FROM users
    WHERE email = ?`;

  database.query(getUserQuery, [email], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).send("Error fetching user");
    }

    if (results.length === 0) {
      return res.status(401).send("User not found");
    }

    const user = results[0];

    // Compare passwords
    if (password === user.password) {
      res.send("User Logged Successfully");
      console.log("User Logged In successfully");
    } else {
      res.status(401).send("Incorrect password");
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const InsertData = `
    INSERT INTO users (name, email, password)
    VALUES (?, ?, ?)
    `;
  // Execute the SQL query using the query method
  database.query(InsertData, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).send("Error inserting user");
    }
    console.log("User inserted successfully");
    res.send("User Inserted Successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
