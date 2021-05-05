const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json()); //convierte el body(json) en un objeto js

app.get("/forums", async (req, res) => {
  try {
    const forums = await db.getForums();
    res.json({ status: "OK", results: forums });
  } catch (e) {
    res.status(500).json({ status: "ERROR", details: e.toString() });
  }
});

app.post("/forums", async (req, res) => {
  // validamos que lo que envian está bien
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ status: "ERROR", details: "Missing 'name' field" });
  }
  try {
    const newForum = await db.newForum(name);
    res.json({ status: "OK", results: newForum });
  } catch (e) {
    res.status(500).json({ status: "ERROR", details: e.toString() });
  }
});

app.listen(8080, () => {
  console.log("Forumsite server on port 8080");
});
