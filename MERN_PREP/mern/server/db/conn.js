// connects to the database
const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {useNewUrlParser: true, useUnifiedTopology: true});

var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect((err, db) => {
            if (db) {
                _db = db.db('employees');
                console.log("Successfully connected to MongoDB server");
            }
            return callback(err);
        });
    },
    getDb: function() {
        return _db;
    },
};

