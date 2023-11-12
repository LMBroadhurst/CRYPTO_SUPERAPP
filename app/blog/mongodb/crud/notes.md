# CRUD

## find() and findOne()

The following operations both return all documents in the specified collection:

```javascript
await myColl.find(); // no query
await myColl.find({}); // empty query
```

If you don't pass a query or pass an empty query to the findOne() method, the operation returns a single document from a collection.

```javascript
const options = {
  projection: { _id: 0, field1: 1 },
};

const findResult = await myColl.findOne({}, options);
```

## Cursors
Read operations that return multiple documents do not immediately return all values matching the query. Because a query can potentially match very large sets of documents, these operations rely upon an object called a cursor.

The following functions directly return cursors:
- Collection.find()
- Collection.aggregate()
- Collection.listIndexes()
- Collection.listSearchIndexes()
- Db.aggregate()
- Db.listCollections()

For these operations we will have to perform some final actions to return the documents.
e.g.   
```javascript
const cursor = myColl.find({});
const allValues = await cursor.toArray();
```

## Distinct
The distinct() method requires a document field as a parameter. You can specify the following optional parameters to adjust the method output:
- A query parameter to refine your results
- An options parameter to set collation rules

```javascript
// specify "borough" as the field to return values for
const cursor = myColl.distinct("borough");
for await (const doc of cursor) {
  console.dir(doc);
}

[ "Bronx", "Brooklyn", "Manhattan", "Queens" ]
```

## Sort Results
Use sort to change the order in which read operations return documents. Sort tells MongoDB to order returned documents by the values of one or more fields in a certain direction. To sort returned documents by a field in ascending (lowest first) order, use a value of 1. To sort in descending (greatest first) order instead, use -1. If you do not specify a sort, MongoDB does not guarantee the order of query results.

```javascript
// define an empty query document
const query = {};
// sort in descending (-1) order by length
const sort = { length: -1 };
const cursor = myColl.find(query).sort(sort);
for await (const doc of cursor) {
  console.dir(doc);
}
```

## Limit
```javascript
// define an empty query document
const query = {};
// sort in descending (-1) order by length
const sort = { length: -1 };
const limit = 3;
const cursor = myColl.find(query).sort(sort).limit(limit);
for await (const doc of cursor) {
    console.dir;
}
```