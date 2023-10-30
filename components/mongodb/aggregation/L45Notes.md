## $project

-   Determines output document shape
-   Specify fields or add new new fields
-   Should be the last stage of a pipeline
-   Can be specified as inclusion (1) or exclusion (0)
-   if field is new, specify the new value

## $set (previously called $addFields)

-   Adds or modifies fields in the pipeline
-   Good for changing or adding new fields in a pipeline

## $count

-   Counts documents in a pipeline
-   e.g. `$count: "total_zips"`

## $out

-   Writes the documents returned by an aggregation into a new collection
-   Must be the last stage
-   Creates new collection if it does not already exist
-   If collection exists, will overwrite old collection data

-   `$out : "new_collection"`
-   `$out : { db: "output_db", "new_collection" }`
