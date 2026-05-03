const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(cors());
app.use(express.json());

// HEALTH CHECK (IMPORTANT)
app.get("/", (req, res) => {
  res.json({ status: "Veda backend running 🚀" });
});

// SAMPLE API
app.get("/api/parties", (req, res) => {
  res.json([
    { id: "partyA", name: "National Democratic Party" },
    { id: "partyB", name: "United Progressive Alliance" },
    { id: "partyC", name: "Regional Development Front" }
  ]);
});

// START SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});