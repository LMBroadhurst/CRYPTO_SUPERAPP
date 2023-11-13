## Atlas search
Built on open source lucene, industry standard.

## Search indexes
Defines how a search should be performed.
With dynamic mapping:
- All fields are indexed (default)
- Searches against all fileds including nested fields
- Good to use when all fields should be weighted the same & quick setup

## Relevance based search vs. Database 
Applications end user seeks to find records similar to the search term.
Not like a developer querying a database.

## Static mapping
Select the specific fields that should be indexed and searched upon.
Static, only selected fields are searched upon.

## Assigning weights to fields

## $search

## $compound
Nested in the search stage.
Includes clauses which specify weights:
    Must, Must Not, Should, Filter.

Must: e.g. Must have an account limit $gt 10000
Should: e.g. Be from the UK
Only returns account limits greater than 10000, with higher weighting to uk based accounts.

Using $search and Compound Operators
The compound operator within the $search aggregation stage allows us to give weight to different field and also filter our results without having to create additional aggregation stages. The four options for the compound operator are "must", "mustNot, "should", and "filter".

"must" will exclude records that do not meet the criteria. "mustNot" will exclude results that do meet the criteria. "should" will allow you to give weight to results that do meet the criteria so that they appear first. "filter" will remove results that do not meet the criteria.

```json
$search {
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

## filter: eliminates results that match the clause
## must, must not, should contribute to scores

## FACETS & SEARCHMETA
Facets: Buckets that search results are grouped into
e.g. Facebook groups by friends, groups, marketplace, etc.
Datatypes: Numbers, Dates, Strings.

## $searchMeta
Allows us to see the facets and how many results are in each bucket.
It is the information about how a search has been carried out.

```javascript
$searchMeta: {
    "facet": {
        "operator": {
            "text": {
            "query": ["Northern Cardinal"],
            "path": "common_name"
            }
        },
        "facets": {
            "sightingWeekFacet": {
                "type": "date",
                "path": "sighting",
                "boundaries": [ISODate("2022-01-01"), 
                    ISODate("2022-01-08"),
                    ISODate("2022-01-15"),
                    ISODate("2022-01-22")],
                "default" : "other"
            }
        }
    }
}
```