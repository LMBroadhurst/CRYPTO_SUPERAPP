## Facets and searchMeta

## Facets

-   Buckets we group our search results into, e.g. on facebook, people, groups,
    pages, etc
-   Categories: Numbers, Dates, Strings

## $searchMeta

-   Allows us to see the facets and how many results are in each bucket
-   metadata: facets and count

## Example

-   Notice how we create 4 buckets from the boundaries property $searchMeta: {
    "facet": { "operator": { "text": { "query": ["Northern Cardinal"], "path":
    "common_name" } }, "facets": { "sightingWeekFacet": { "type": "date",
    "path": "sighting", "boundaries": [ISODate("2022-01-01"),
    ISODate("2022-01-08"), ISODate("2022-01-15"), ISODate("2022-01-22")],
    "default" : "other" } } } }
