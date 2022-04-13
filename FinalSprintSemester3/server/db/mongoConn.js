// function to connect to the mongo database

const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {useNewUrlParser: true, useUnifiedTopology: true});

var _db;

const connectToServer = (whichDB, callback) => {
    client.connect((err, db) => {
        if (db) {
            _db = db.db(whichDB);
            console.log(`Successfully connected to MongoDB server: ${whichDB}`);
        }
        return callback(err);
    });
}

const getDb = () => {
    return _db;
}




module.exports = {
    connectToServer,
    getDb
}
