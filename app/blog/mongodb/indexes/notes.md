## Indexes
Special data structures that store a small portion of the data from a collection.
Stored in an ordered fashion & efficient to search through.
Indexes point to the documents identity
Improve query performance: reduce disk I/O and resources required.

Come with a write performance cost.
Write performs can degrade if we have too many indexes.
Every query should come with an index.

## w/o indexes
MongoDB needs to read all documents (COLLSCAN).
Sorts results in memory.
Slower than if an index is provided.

## Single field vs. Compound field indexes
Single field, on one field only.
Compound, contain more than one field.
Multikey - if used on an array. Can only use 1 multikey index on each index.

## createIndex()
1 specifies the order. 1 for ascending, -1 for descending.
unique is a constraint we can add to enforce uniqueness of fields.
`db.coll.createIndex({fieldName: 1}, {unique: true})`

## getIndexes()
Shows indexes on the collection.

## deleteIndexes()
Delete unused indexes, as they impact write performance.
Check if index is being used by using hideIndex() first.
Can see if query performance is impacted by using hideIndex.

Specify name of index.
`hideIndex()`

With no params, deletes them all.
Can specify single index or an array of indexes.
`dropIndex()`


## explain()
Returns query plan, with COLLSCAN, IXSCAN, winning plan, etc etc.
The IXSCAN stage indicates the query is using an index and what index is being selected.
The COLLSCAN stage indicates a collection scan is perform, not using any indexes.
The FETCH stage indicates documents are being read from the collection.
The SORT stage indicates documents are being sorted in memory.

## compound indexes
index on multiple fields, also can be multikey.
Order of fields matter. 
Equality -> Sort -> Range.
Kind of like a small aggregation pipeline.