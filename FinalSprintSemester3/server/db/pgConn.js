// function to connect to the pg database

// require and import statements
const Pool = require("pg").Pool;

//defining the connection pool
// set the connection information in the .env file

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
})

module.exports = pool