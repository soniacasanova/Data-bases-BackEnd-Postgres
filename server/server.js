const express = require("express");
const cors = require("cors");
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());



app.get("/forums", async (req, res) => {
  const forums = await db.getForums();
  res.json(forums);
});

app.listen(8080, () => {
  console.log("Forumsite server on port 8080");
});
