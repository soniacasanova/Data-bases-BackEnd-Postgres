const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "mysecretpassword",
  database: "forumsite",
});

const app = express();

app.use(cors());
app.use(express.json());

const getForumsSQL = `
 SELECT * FROM forums;
`;

app.get("/forums", async (req, res) => {
  const result = await pool.query(getForumsSQL);
  const forums = result.rows;
  res.json(forums);
});

app.listen(8080, () => {
  console.log("Forumsite server on port 8080");
});
