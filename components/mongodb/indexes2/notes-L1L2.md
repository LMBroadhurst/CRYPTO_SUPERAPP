## How indexes work

- Compound indexes are especially powerful for improving query performance
- Follow Equality -> Sort -> Range order for an efficient compound index

## Explain

`db.collection.explain()...`
3 Parameters:

- 'queryPanner': default verbosity mode
- 'executionStats': more information about index/query
- 'allPlansExecution': shows different plans with scores on how efficient they are

Explain shows different plans that can be used to retrive the data.
The winning plan is the chosen path.
