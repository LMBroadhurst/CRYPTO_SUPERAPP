import React from 'react'

const Arrays = () => {
  return <section>
    $elemMatch
    $push
    $in
    $nin
    <h4>$push</h4>
    <p>The $push operator adds a new value to the hosts array field. Here's an example:</p>
    <pre>
        {`db.podcasts.updateOne(
            { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
            { $push: { hosts: "Nic Raboy" } }
        )
        `}
    </pre>
    
  </section>
}

export default Arrays