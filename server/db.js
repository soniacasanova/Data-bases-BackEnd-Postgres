const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "mysecretpassword",
  database: "forumsite",
});

const getForumsSQL = `
 SELECT * FROM forums;
`;

const getForums = async () => {
    const result = await pool.query(getForumsSQL);
    return result.rows;
}

const newForumSQL = `
INSERT INTO forums (name) Values ($1)
    RETURNING*;
`

const newForum = async (name) => {
   const result = await pool.query(newForumSQL, [name]);
    return result.rows[0];
}

module.exports = {
    getForums,
    newForum,
};