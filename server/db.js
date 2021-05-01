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

module.exports = {
    getForums,
};