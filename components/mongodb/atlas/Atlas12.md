## Atlas search

- Relevance based search
- Surface records based on a search term (NOT a DB search for a particular record)

- Starts with search indexes, used to specify how search algorithm should work. Often lucene.standard
- Not the same as db index or db search

## Create search index

- Defines how relevance based search should be performed
- Dynamic Mapping: All fields indexed aside from booleans/objectIds/timestamps (DEFAULT)

- Index/Search analyser: DEFAULT to lucene.standard (OS relevance based search)

### Dynamic Mapping

- If using dynamic mapping, don't need to specify field mappings, as all fields will be included
- All fields are searched upon with equal weight

## Lab 1

1. Next, create an aggregation pipeline, which will contain two stages.
2. Create a $search stage that uses the index sample_supplies-sales-dynamic with query value of notepad and a path wildcard of \*.
3. Create a $set stage that adds a new field score to the document to represent the Atlas Search score { $meta: "searchScore" }.
4. Review the documents outputted and note they now include a score, the object_id, and the fields that matched the search term. The score is based on how much that record matches the search term and on the rules described in the index. In this case, with a dynamic index, all of the fields were treated equally.

```typescript
db.sales.aggregate([
  {
    $search: {
      index: "sample_supplies-sales-dynamic",
      text: {
        query: "notepad",
        path: { wildcard: "*" },
      },
    },
  },
  {
    $set: {
      score: { $meta: "searchScore" },
    },
  },
]);
```

## Lab 2

1. Next, create an aggregation pipeline, which will contain two stages. (Forgot the method for aggregation? Check the hint below!)
2. Create a $search stage that uses the index sample_supplies-sales-static with query value of London and a path wildcard of \*.
3. Create a $set stage that adds a new field score to the document to represent the Atlas Search score { $meta: "searchScore" }.
4. Review the documents outputted and note they now include a score, the object_id, and the fields that matched the search term. The score is based on how much that record matches the search term and on the rules described in the index. In this case, with a static mapping for the index, the field storeLocation is what is used for the score calculation.

```typescript
db.sales.aggregate([
  {
    $search: {
      index: "sample_supplies-sales-static",
      text: {
        query: "London",
        path: { wildcard: "*" },
      },
    },
  },
  {
    $set: {
      score: { $meta: "searchScore" },
    },
  },
]);
```
