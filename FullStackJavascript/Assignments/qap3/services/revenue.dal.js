// imports

const Pool = require('pg').Pool;

// defining the pool
const pool = new Pool({
    user: 'peter',
    host: 'localhost',
    database: 'dvdrental',
    password: 'royisanerd',
    port: 5432,
});

// function to access the view of Revenue dvds from the database
// receives the store id as a parameter

const getRevenueDvds = function (store_id) {
    // write the function here
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM vw_revenue WHERE store_id = $1 LIMIT 10" ;
        pool.query(sql, [store_id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    })
};


module.exports = {
    getRevenueDvds,
};