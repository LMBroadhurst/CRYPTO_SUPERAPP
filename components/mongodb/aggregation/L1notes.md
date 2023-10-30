## Aggergation

- Analysis and summary of data, doesn't impact origin data
- Stage: aggregation operation performed on the data, single operation on the data
- Aggregation Pipeline: Series of stages completed one at a time, in order
- Output from each stage becomes input for the next stage

Example stages:

- $match: filters for data that matches criteria set
- $group: groups documents based on criteria
- sort: sorts documents in a specific order

## $ prefix

- This is a field path
- refers to value in a field
