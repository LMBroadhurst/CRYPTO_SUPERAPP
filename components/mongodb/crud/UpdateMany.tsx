import React from "react";

const UpdateMany = () => {
  return (
    <section>
      <h2>updateMany()</h2>
      <p>
        To update multiple documents, use the updateMany() method. This method
        accepts a filter document, an update document, and an optional options
        object. The following code shows an example:
      </p>
      <pre>
        {`db.books.updateMany(
            { publishedDate: { $lt: new Date("2019-01-01") } },
            { $set: { status: "LEGACY" } }
        )`}
      </pre>
    </section>
  );
};

export default UpdateMany;
