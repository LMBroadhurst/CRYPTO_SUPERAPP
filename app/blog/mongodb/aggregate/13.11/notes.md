## $first_name
This is a field path. It refers to the value from the $first_name key.
e.g. `$set : { username: $concat: ["$first_name", "$last_name"] }`

## $match
Place as early as possible in the aggregation pipeline so it can use indexes.
Reduces number of documents to perform operations on, lessening required processing.

## $group
Group documents by a specific key.
Output is one document that contains information about all documents that matched the group key.
_id is the key that constrains the grouping.
e.g. $group: { _id: "$item_name", numberOfTimesPurchased: $count: {} }

## match group sort and limit
```javascript
db.zips.aggregate([
    { $match: { state: "CA"} },
    { $group: { _id: "$city", totalZips: { $count : { } } } },
    { $sort: { "totalZips": 1 } },
    { $limit: 5 }
])
```

## $project
Determines the output shape of the data.
Usually last stage of the output.
Can either be inclusion or exclusion, 1 for include 0 for exclude.

## $set
Adds or modifys fields in the pipeline.
e.g. `$set: { inBaseQuantity: $multiply: [0.98, "$chf_position"]}`

## $count
Counts documents in the pipeline and returns total.

## $out
Writes documents that are returned from a pipeline into an existing collection.
Must be the last stage.
Creates a new collection if one doesn't exist, or overwrites previous collection.
Can provide the db and collection names, will create both if none exist.
Or just provide a name and that will create new collection in the same db.
