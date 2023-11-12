# Section 6: DRIVERS (18%))

## What is the node.js driver?
- Piece of middleware. Works in tandem with the built in node.js BSON package.
- Simplify connection to and interacting with your db via your application.
- Establishes secure connections to a mongoDB cluster.
- Allows Node.JS applications to connect to mongoDB and work with the data in mongoDB databases.
- Features an asynchronous API which allows for interactions with mongoDB via promises or callbacks.

## Define how the XX application connects/uses the XXX driver?
- Install node driver and add a .env file to a node.js application.
- Head to mongo client and click connect, here we get the connection string to add to the .env file.
- Import mongo client into the app and db connection string from the .env.
- Then create a main() function that connects to the client via the mongodb client and uri string.
- There should only ever be a single (1) MongoClient instance for all database requests.

## Define the components of the URI string used by MongoClient to connect the driver to the database.
- username, password, database, optional params

## Identify what connection pooling is in terms of the driver and what advantages it offers.
- A connection pool is a cache of open, ready-to-use database connections maintained by the driver.
- Connection pools open sockets on demand to support concurrent requests to mongoDB in applications.
- Maximum size of each connection pool is set by default to 100.
- Each mongo client instance requires two sockets.

Benefits
- A connection pool helps reduce application latency and the number of times new connections are created.
- A connection pool creates connections at startup. Applications do not need to manually return connections to the pool. Instead, connections return to the pool automatically.
- Some connections are active and some are inactive but available. If your application requests a connection and there’s an available connection in the pool, a new connection does not need to be created.

## Identify the correct syntax for the XX driver to insert one document and to insert many documents.
```
await collection.insertOne({ name: "Lewis", age: 28 })
await collection.insertMany({}, {}, {}, {})
```

## Identify the correct syntax for the XX driver to update one document and to update many documents.
await collection.updateOne({ name: "Lewis", age: 28 }, { name: "UpdatedLewis" })
await collection.insertMany({ age: 28 }, { age: 29 })

## Identify the correct syntax for the XX driver to create an aggregation pipeline

## Identify the different syntax for the XX driver when using the MongoDB QueryLanguage (MQL) and when using the Aggregation Framework


