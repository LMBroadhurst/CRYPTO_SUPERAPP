### Create search index

```javascript
// Create a search index
const index1 = {
    name: "search1",
    definition: {
        "mappings": {
            "dynamic": true
        }
    }
}
await collection.createSearchIndex(index1);
```

// dynamic mapping is a mappping that covers all values and gives them the same weighting on a search


### List search indexes

```javascript
// List search indexes
const result = await collection.listSearchIndexes().toArray();
console.log("Existing search indexes:\n");
for (const doc in result) {
    console.log(doc);
}
```

## Update a search index

```javascript
// Update a search index
const index2 = {
    "mappings": {
        "dynamic": true,
        "fields": {
            "description": {
                "type": "string"
            }
        }
    }
}
await collection.updateSearchIndex("search1", index2);
```

### Drop a search index
```javascript
// Dropping (deleting) a search index
await collection.dropSearchIndex("search1");
```