// create messages to add to a log database,
// the log collection is a mongo collection
// migrated to React

// const dbo = require("../db/mongoConn");

// class Message {
//     constructor(user, search, time) {
//         this.user = user;
//         this.search = search;
//         this.time = time;
//     }
// }   
//     class Logger {
//         constructor() {
//             this.message = "";
//         }
//         create(user, search, time) {
//             this.message = new Message(user, search, time);
//             return this.message;
//         }
//         log() {
//             console.log(this.message);
//             // add to database
//             let db_connect = dbo.getDb("searchAnimals");
//             db_connect.collection("log").insertOne(this.message, (err, result) => {
//                 if (err) throw err;
//                 res.json(result);
//             }
//             )

//         }

//     }


// // let logger = new Logger();
// // logger.create("user1", "search1", "time1");
// // logger.log();

// module.exports = {
//     Logger
// }
