## Static Mapping or Static Indexing

-> refine your index (after creating new search in atlas)

-   Save computing power and time by selecting only useful fields
-   Now add the correct mappings with the relevant types e.g. string or number

## $compound operator

-   Specifies the weight of the field
-   must, must not, should clauses
-   also filter
-   The compound operator combines multiple search clauses to return the most
    relevantresults and assigns weights to documents with qualities that you
    want to appear higher in search results.

```typescript

$search: {
  "compound": {
    "must": [{
      "text": {
        "query": "field",
        "path": "habitat"
      }
    }],
    "should": [{
      "range": {
        "gte": 45,
        "path": "wingspan_cm",
        "score": {"constant": {"value": 5}}
      }
    }]
  }
}

```

## $search operator

-   Contains index, highlight, operator, and more
-   filter: Removes matches from the search

## Lab

### Answer

```typescript
db.sales.aggregate([
    {
        $search: {
            index: 'sample_supplies-sales-dynamic',
            compound: {
                filter: [
                    {
                        text: {
                            query: 'Online',
                            path: 'purchaseMethod',
                        },
                    },
                ],
                should: [
                    {
                        text: {
                            query: 'notepad',
                            path: 'items.name',
                            score: {constant: {value: 5}},
                        },
                    },
                ],
            },
        },
    },
    {
        $project: {
            'items.name': 1,
            purchaseMethod: 1,
            score: {$meta: 'searchScore'},
        },
    },
])
```
