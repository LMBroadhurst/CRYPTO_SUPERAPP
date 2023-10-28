import React from 'react'

const UpdateOne = () => {
  return <section>
    <h2>Replace One - updateOne()</h2>
    <p>Accepts a filter, update document, and options parameter.</p>

    <h4>$set</h4>
    <p>Replaces a value of a field with the prompted value</p>
    <p>{`db.transactions.updateOne({ _id: "jkdga "}, { $set: { amount: 1000 } })`}</p>

    <h4>upsert option - if no ducment is found in updateOne, a new one is created</h4>
    <section>
        {`db.podcasts.updateOne(
            { title: "The Developer Hub" },
            { $set: { topics: ["databases", "MongoDB"] } },
            { upsert: true }
        )`}
    </section>
  </section>
}

export default UpdateOne