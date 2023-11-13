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