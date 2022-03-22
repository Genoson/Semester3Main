const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'peter',
//   host: 'localhost',
//   database: 'dvdrental',
//   password: 'royisanerd',
//   port: 5432,
// });
const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "dvdrental",
  password: "password",
  port: 5432,
});

var getStores = function() {
    return new Promise(function(resolve, reject) {
      const sql = "SELECT * FROM vw_stores";
      pool.query(sql, [], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      }); 
    });
  };

var getStoreById = function(id) {
  return new Promise(function(resolve, reject) {
    const sql = "SELECT * FROM vw_stores WHERE store_id = $1";
    pool.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

module.exports = {
  getStores,
  getStoreById,
}