https://www.mongodb.com/docs/manual/reference/aggregation-quick-reference/#stages

# Aggregation Pipeline
Stages of processing that allow you to complete several complex actions to retrieve a set of data.
Contain stages and expression operators (similar to functions):
- Finding
- Sorting
- Grouping
- Projecting

## Run an Aggregation Pipeline
To run an aggregation pipeline, use:

db.collection.aggregate() or

## Stages

### $match
- Allows us to filter the documents coming in to the aggregation pipeline stage
- Example filters include $lt, $gt
- $match should be placed early in your pipeline to reduce the number of documents to process

### $sort
- Sorts all input documents and returns them to the pipeline in sorted order
- The $sort stage takes all the input documents and sorts them in a specific order. The documents can be sorted in numerical, alphabetical, ascending, or descending order
- Sort ascending = 1, descending = -1
- e.g. { $sort: { balance: 1 } } sorts the documents in ascending order by the balance field.

### $project
- The $project stage takes all the input documents and passes along only a subset of the fields in those documents by specifying the fields to include or exclude.
- Allows us to specify the fields to find in the final result
- Can also add newly computed values in here too
- Use 0 or 1 on the values we want to exclude or include

### $group
- Seperates documents into groups according to a group key
- The output is one document for each unique group key // returns one document for every unique group key
- Specify the keys we are specifying by with the "$<key>" notation
- We can also add some operators here, such as $avg or $sum
- Example group stage => $group: { _id: "$movie", totalTickets: { $sum: "$tickets" } }

In code this looks like...

```javascript

const pipeline = [
  // Stage 1: match the accounts with a balance greater than $1,000
  { $match: { balance: { $lt: 1000 } } },
  // Stage 2: Calculate average balance and total balance
  {
    $group: {
      _id: "$account_type",
      total_balance: { $sum: "$balance" },
      avg_balance: { $avg: "$balance" },
    },
  },
  // Stage 3: $project - project only the requested fields and one computed field (account_type, account_id, balance, gbp_balance)
  {
    $project: {
      _id: 0,
      account_id: 1,
      account_type: 1,
      balance: 1,
      // GBP stands for Great British Pound
      gbp_balance: { $divide: ["$balance", 1.3] },
    },
  }
]

await client.connect()
console.log(`Connected to the database 🌍. Full connection string: ${safeURI}`)
let result = await accountsCollection.aggregate(pipeline)

```

## Limitiations
Aggregation operations have some 
limitations:

Returned documents must not violate the 
BSON-document size limit
 of 16 megabytes.

Pipeline stages have a memory limit of 100 megabytes by default.

## $count
Counts documents in the pipeline and returns total.

## $out
Writes documents that are returned from a pipeline into an existing collection.
Must be the last stage.
Creates a new collection if one doesn't exist, or overwrites previous collection.
Can provide the db and collection names, will create both if none exist.
Or just provide a name and that will create new collection in the same db.

## $project
Determines the output shape of the data.
Usually last stage of the output.
Can either be inclusion or exclusion, 1 for include 0 for exclude.

## $set
Adds or modifys fields in the pipeline.
e.g. `$set: { inBaseQuantity: $multiply: [0.98, "$chf_position"]}`

## field paths
This is a field path. It refers to the value from the $first_name key.
e.g. `$set : { username: $concat: ["$first_name", "$last_name"] }`

## match group sort and limit
```javascript
db.zips.aggregate([
    { $match: { state: "CA"} },
    { $group: { _id: "$city", totalZips: { $count : { } } } },
    { $sort: { "totalZips": 1 } },
    { $limit: 5 }
])
```