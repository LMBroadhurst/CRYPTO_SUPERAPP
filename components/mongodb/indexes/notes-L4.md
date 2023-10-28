## Compound Indexes
- Index on multiple fields
- Can include single and multikey indexes
- Max 1 array per index

- The order of the fields in a a compond index matters
- Follow Equality -> Sort -> Range order for a compound index
- Avoids in memory sorting and filtering

## explain()
- Really powerful tool for us to see what is happening