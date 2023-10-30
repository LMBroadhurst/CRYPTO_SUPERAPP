import React from 'react'

const Find = () => {
  return (
    <section>
      <h2>find()</h2>
      <p>
        To read all the documents that are stored in a collection, we can use
        find() with no query parameter.
      </p>
      <p>
        We can also use a query here, similarly to findOne(), that will get all
        documents that match the performed query. THe comparators work here too
        as expected.
      </p>
      <p>{`db.transactions.find({ bank: 'Santander', amount: { $gt: 1000 } })`}</p>
      <p>{`db.transactions.find({ amount: { $eq: 100 } })`}</p>
    </section>
  )
}

export default Find
