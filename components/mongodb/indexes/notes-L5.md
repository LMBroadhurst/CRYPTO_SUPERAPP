## Deleting indexes

- Great, but have a write cost
- Too many indexes can impact performance, make sure they are used
  `db.collection.dropIndex(<index>)` <index> must be specified by the name or
  key (check with getIndexes())

## Hiding indexes

- Can hide an index before deleting it, this allows us to assess whether the
  index is providing a performance benefit `db.collection.hideIndex(<index>)`
