// index.js
const express = require("express");
const app = express();

// Middleware pour parser JSON
app.use(express.json());

// "base de données" en mémoire (pour tester)
let staff = [];

// GET - liste disponibilités
app.get("/availability", (req, res) => {
  res.json(staff);
});

// POST - ajouter disponibilité
app.post("/availability", (req, res) => {
  const entry = req.body;
  entry.receivedAt = new Date().toISOString();
  staff.push(entry);
  res.json({ message: "Availability added", data: entry });
});

// health check
app.get("/health", (req, res) => res.send("OK"));

// PORT fourni par Azure sinon 3000 local
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Staff Service running on port ${port}`);
});
