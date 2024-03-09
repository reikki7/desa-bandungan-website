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
  database: "desa_kenteng_database",
});

app.get("/kegiatan", (req, res) => {
  const sql = "SELECT * FROM kegiatan";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/kegiatan/:id", (req, res) => {
  const kegiatanId = req.params.id;
  const sql = "SELECT * FROM kegiatan WHERE id = ?";
  db.query(sql, [kegiatanId], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    if (data.length === 0) {
      res.status(404).json({ error: "Kegiatan not found" });
      return;
    }
    res.json(data[0]);
  });
});

app.get("/kegiatan_images", (req, res) => {
  const sql = "SELECT * FROM image_kegiatan";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/documents", (req, res) => {
  const sql = "SELECT * FROM documents";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/umkm", (req, res) => {
  const sql = "SELECT * FROM umkms";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/umkm_images", (req, res) => {
  const sql = "SELECT * FROM umkm_images";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    res.json(data);
  });
});

app.get("/umkm/:id", (req, res) => {
  const umkmId = req.params.id;
  const sql = "SELECT * FROM umkms WHERE id = ?";
  db.query(sql, [umkmId], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "An error occurred while fetching data" });
      return;
    }
    if (data.length === 0) {
      res.status(404).json({ error: "UMKM not found" });
      return;
    }
    res.json(data[0]);
  });
});

app.get("/", (req, res) => {
  return res.json("Hello");
});

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
