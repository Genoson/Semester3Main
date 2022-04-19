// function to connect to the mongo database

const {MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {useNewUrlParser: true, useUnifiedTopology: true});

var _db;

const connectToServer = (callback) => {
    client.connect((err, db) => {
        if (db) {
            _db = db.db("searchAnimals");
            console.log(`Successfully connected to MongoDB server: searchAnimals`);
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
