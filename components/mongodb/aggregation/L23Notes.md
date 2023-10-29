## $match
- Filter for documents matching criteria
- Place as early in aggregation pipeline as possible, reduces the number of documents

## $group
- Create a single document for each distinct value
- groups documents according to specified group key
- Output is one document for each unique value of the group key

## $sort
- Sorts all documents and passes them through the pipeline in an assorted order
- 1: ascending order // -1: descending order

## $limit
- Limits number of documents passed on to next stage
