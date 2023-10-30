## Create a single field index

- Support queries and sorts on a single field
- createIndex({ fieldname: 1 (ascending)}) (-1 descending)
- To specify uniqueness... createIndex( { email: 1}, { unique: true })

## Get Indexes

- db.customers.getIndexes()

## explain()

- Explains what is happening with a specific query, can see if an index is being
  used
- e.g. db.customers.explain().find({})

```
The IXSCAN stage indicates the query is using an index and what index is being selected.
The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
The FETCH stage indicates documents are being read from the collection.
The SORT stage indicates documents are being sorted in memory.
```
