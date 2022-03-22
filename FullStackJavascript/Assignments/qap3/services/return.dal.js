// Data access layer 

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

// function to access the view of unreturned dvds from the database
// receives the store id as a parameter

const getUnreturnedDvds = function (store_id) {
    // write the function here
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM vw_returns WHERE store_id = $1 ORDER BY customer_name" ;
        pool.query(sql, [store_id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    })
};

// stretch goal: function to access a filter of the view that shows all the unreturned
// associated with a particular customer, required for full marks... Got it


const getUnreturnedDvdsByCustomer = function (customer_name) {
    // write the function here
    // customer_name = customer_name.replace('%20', ' ');
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM vw_returns WHERE customer_name=$1" ;
        pool.query(sql, [customer_name], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    })
};



module.exports = {
    getUnreturnedDvds,
    getUnreturnedDvdsByCustomer,
};