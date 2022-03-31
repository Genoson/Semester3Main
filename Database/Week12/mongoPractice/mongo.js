// test connection to mongo db server

// importing the mongo client
const { MongoClient } = require("mongodb");

// main function, call to execute this program
async function main() {
  const uri =
    "mongodb+srv://node_user:pwd@stevefirstcluster.vspu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected correctly to server");
    //await listDatabases(client);
    // await createDocument(client, { name: "Steve", age: "34" });
    //   await createMultipleDocuments(client, [{ name: "Somebody", age: "24" }, { name: "ThatGuy", age: "44", location: "New York" }]);
    await findOneDocumentByName(client, "Steve");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

// function to list all the databases in the mongo db server
async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

//function to create a document
async function createDocument(client, data) {
  // specify the database and collection and the insert function
  const result = await client
    .db("SteveFirstCluster")
    .collection("Testing")
    .insertOne(data);

  console.log(
    `Inserted a document with the following id: ${result.insertedId}`
  );
}

// function to create multiple documents
async function createMultipleDocuments(client, data) {
  // specify the database and collection and the insert function
  const result = await client
    .db("SteveFirstCluster")
    .collection("Testing")
    .insertMany(data);

  console.log(`Inserted ${result.insertedCount} documents`);
}

// now for read functions
async function findOneDocumentByName(client, name) {
  // specify the database and collection and the insert function
  const result = await client
    .db("SteveFirstCluster")
    .collection("Testing")
    .findOne({ name: name });
  //in the above the findOne function can recieve 0, one, or many properties to search for

  if (result) {
    console.log(`Found a document with the following id: ${result._id}`);
  } else {
    console.log("No document found");
  }
}

// search for many documents, example based on airbnb listings, allows for search with many results
//this database does not exist so this is just for reference of many search technique
async function findManyDocuments(
  client,
  {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  } = {}
) {
  const cursor = client
    .db("SteveFirstCluster")
    .collection("Testing")
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms },
    }).sort({last_review: -1}).limit(maximumNumberOfResults);

    const results = await cursor.toArray();
    // console.log(results);
}

// execute the main function
main().catch(console.error);
