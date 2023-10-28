import React from 'react'

const ReplaceOne = () => {


    return <section>
        <div>ReplaceOne</div>
        <p>3 parameters, filter - replacement - options</p>

        <h2>Example Query</h2>
        <pre>
            {`db.books.replaceOne(
                {
                    _id: ObjectId("6282afeb441a74a98dbbec4e"),
                },
                {
                    title: "Data Science Fundamentals for Python and MongoDB",
                    isbn: "1484235967",
                    publishedDate: new Date("2018-5-10"),
                    thumbnailUrl:
                    "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
                    authors: ["David Paper"],
                    categories: ["Data Science"],
                }
            )`}       
        </pre>
    </section>
}

export default ReplaceOne