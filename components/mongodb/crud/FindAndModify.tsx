import React from 'react'

const FindAndModify = () => {
    return (
        <section>
            <div>FindAndModify</div>
            <p>
                The findAndModify() method is used to find and replace a single
                document in MongoDB. It accepts a filter document, a replacement
                document, and an optional options object. The following code
                shows an example:
            </p>
            <pre>
                {`db.podcasts.findAndModify({
            query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
            update: { $inc: { subscribers: 1 } },
            new: true,
        })`}
            </pre>
        </section>
    )
}

export default FindAndModify
