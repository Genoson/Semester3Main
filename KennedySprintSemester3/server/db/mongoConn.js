// function to connect to the mongo database

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect((err, db) => {
      if (db) {
        _db = db.db("binaryTrees");
        console.log(`Successfully connected to MongoDB server`);
      }
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
