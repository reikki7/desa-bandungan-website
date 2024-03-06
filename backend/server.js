const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  port: 3307,
  database: "database_desa_kenteng",
});

app.get("/events", (req, res) => {
  const sql = "SELECT * FROM events";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/", (req, res) => {
  return res.json("Hello World");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
