// create messages to add to a log database,
// the log collection is a mongo collection

class Message {
    constructor(user, search, database, time) {
        this.user = user;
        this.search = search;
        this.database = database;
        this.time = time;
    }
}   
    class Logger {
        // not sure if I need a constructor at all, this is essentially just a function, but this is the solution I created
        constructor() {
            this.message = {};
        }
        // method to instantiate a message object
        create(user, search, database, time) {
            let message = new Message(user, search, database, time);
            return message;
        }
        // this method got shifted to the server
        // log() {
        //     console.log(this.message);
        //     // add to database
        //     let db_connect = dbo.getDb("searchAnimals");
        //     db_connect.collection("log").insertOne(this.message, (err, result) => {
        //         if (err) throw err;
        //         res.json(result);
        //     }
        //     )

        // }

    }

// testing the basic functionality of the logger
//  let logger = new Logger();
// logger.create("user1", "search1", "time1");
// logger.log();


// console.log(logger.create("user1", "search1", "mongo", new Date()));


module.exports = {
    Logger
}
