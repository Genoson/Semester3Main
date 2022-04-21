// attempting to test connectivity and routes on mongoDB
// also testing logger here even tho its migrated to the React client portion of the code base

const { expect } = require("@jest/globals");
const {Logger} = require("./logger/logger");
// const dbo = require("./db/mongoConn");


test ("logger test", () => {    
    let logTest = new Logger();
    logTest.create("user1", "search1", "mongo", new Date());
    expect(logTest.message.user).toBe("user1");
    expect(logTest.message.search).toBe("search1");
    expect(logTest.message.database).toBe("mongo");
})




