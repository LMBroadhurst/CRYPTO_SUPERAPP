# Indexes

## What are they

-   Special data structures that store a small portion of the collection data
-   Ordered and easy to search with efficiently
-   Point to the document identity
-   Every collection has a default index of \_id on each document

## Why are they used

-   Improve query performance
-   Reduce disk I/O and resources
-   Support equality matches / range based queries
-   Return sorted data
-   Faster as the document does not need to be read

## Without Indexes

-   MongoDB has to read all documents to see if it matches the query being run
-   Needs to sort results in memory if output requies sorted output

## Costs

-   When inserting/updating documents, we need to update the index data
    structure
-   This degrades the write speed/efficiency
-   Too many indexes can add to inefficiency

## Common types of indexes

1. Single Field
2. Compound Field
3. Multikey Indexes - operate on an array field

## Example

-   We have a common query that is run e.g. finding if an accounts collections
    documents are active db.accounts.find({ active: true, account: '1241'})
-   This is a good candidate for a compound index on active & account
