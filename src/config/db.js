const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.query("SELECT 1")
  .then(() => console.log("Postgres connected"))
  .catch((err) => {
    console.error("Postgres connection error", err);
    process.exit(1);
  });

module.exports = pool;
