## Compound Indexes

-   Index on multiple fields
-   Can include single and multikey indexes
-   Max 1 array per index

-   The order of the fields in a a compond index matters
-   Follow Equality -> Sort -> Range order for a compound index
-   Avoids in memory sorting and filtering

## explain()

-   Really powerful tool for us to see what is happening
-   Combine with below to work out the winningPlan

The IXSCAN stage indicates the query is using an index and what index is being
selected. The COLLSCAN stage indicates a collection scan is perform, not using
any indexes. The FETCH stage indicates documents are being read from the
collection. The SORT stage indicates documents are being sorted in memory.

Example:

```typescript
db.customers
    .explain()
    .find({
        birthdate: {
            $gte: ISODate('1977-01-01'),
        },
        active: true,
    })
    .sort({
        birthdate: -1,
        name: 1,
    })
```

For this query we should use the following index:

```typescript
db.customers.createIndex({
    active: 1,
    birthdate: -1,
    name: 1,
})
```
