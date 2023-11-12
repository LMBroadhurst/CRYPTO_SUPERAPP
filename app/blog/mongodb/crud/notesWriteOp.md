## Insert Documents
An insert operation inserts one or more documents into a MongoDB collection. The Node.js driver provides the following methods to perform insert operations:
- insertOne()
- insertMany()
- bulkWrite()

// insertOne example

```javascript
const myDB = client.db("myDB");
const myColl = myDB.collection("pizzaMenu");

const doc = { name: "Neapolitan pizza", shape: "round" };
const result = await myColl.insertOne(doc);
console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
);
```

// insertMany example

```javascript
const myDB = client.db("myDB");
const myColl = myDB.collection("colors");

try {
   const docs = [
      { "_id": 1, "color": "red"},
      { "_id": 2, "color": "purple"},
      { "_id": 1, "color": "yellow"},
      { "_id": 3, "color": "blue"}
   ];

   const insertManyresult = await myColl.insertMany(docs);
   let ids = insertManyresult.insertedIds;

   console.log(`${insertManyresult.insertedCount} documents were inserted.`);
   for (let id of Object.values(ids)) {
      console.log(`Inserted a document with id ${id}`);
   }
} catch(e) {
   console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
   let ids = e.result.result.insertedIds;
   for (let id of Object.values(ids)) {
      console.log(`Processed a document with id ${id._id}`);
   }
   console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
}
```

## deleteOne / deleteMany
## updateOne / updateMany

## Performing an Upsert
Consider the case in which you want to add information about the food truck even if it does not currently exist in your collection. Rather than first querying whether it exists to determine whether we need to insert or update the document, we can set upsert to true in our call to updateOne() as follows:

```javascript
const query = { name: "Deli Llama" };
const update = { $set: { name: "Deli Llama", address: "3 Nassau St" }};
const options = { upsert: true };
myColl.updateOne(query, update, options);
```

Upsert is applicable to:
- updateOne()
- replaceOne()
- updateMany()

## Compound Operations
The Node.js driver provides the following methods to perform compound operations:
- findOneAndDelete()
- findOneAndUpdate()
- findOneAndReplace()