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

aggregate

### Arithmetic Expression Operators
Here if you see something that you don't recognise but looks sensible in exam, assume it is valid.
Examples: 
- $abs (returns absolute value)
- $ceil (rounds up to largest possible integer, if negative -1.8 => -1)
- $sqrt
- $trunc (truncates decimal to whole number)

### Array Expression
- $in (pretty common)
- $concatArrays
- $map
- $size
- $slice

### Bitwise Operators
- $bitAnd
- $bitNot
- $bitOr
- $bitXor

### Boolean Expression Operators
- $and
- $not
- $or

### Comparison Expression Operators
- $cmp
- $eq / $ne
- $gt / $gte
- $lt / $lte

### Date Expression
$month // $minute // $$etcetcetc

### String Expression
$concat // $dateFromString // $split

### Trigonometry Expression
$sin // $tan // $cosh // $etcetcetc

### Type Expression
$isNumber // $toBool

### Accumulators
$count // $sum // $etcetcetc

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
```

```javascript
const main = async () => {
  try {
    await client.connect()
    console.log(`Connected to the database 🌍. \nFull connection string: ${safeURI}`)
    let result = await accountsCollection.aggregate(pipeline)
    for await (const doc of result) {
      console.log(doc)
    }
  } catch (err) {
    console.error(`Error connecting to the database: ${err}`)
  } finally {
    await client.close()
  }
}

main()
```

## Limitiations
Aggregation operations have some 
limitations:

Returned documents must not violate the 
BSON-document size limit
 of 16 megabytes.

Pipeline stages have a memory limit of 100 megabytes by default.