import React, { useState } from 'react'

const Find = () => {

    const [findOneFromCollections, setFindOneFromCollections] = useState({
        account: undefined,
        customer: undefined,
        transaction: undefined
    })

    async function handleRunFindOneRequests() {
        // const { data: account } = await axios.get("/api/accounts/getByAccountId/387877")
        // setFindOneFromCollections({...findOneFromCollections, account: account})

        // const { data: customer } = await axios.get("/api/customers/getByUsername/jessica94")
        // setFindOneFromCollections({...findOneFromCollections, customer: customer})

        // const { data: transaction } = await axios.get("/api/transactions/getByAccountid/996263")
        // setFindOneFromCollections({...findOneFromCollections, transaction: transaction})

        console.log(findOneFromCollections)
    }

  return <section>
    <p>Currently connected via the mongodb node driver to a sample database called "sample_analytics".</p>
        <p>Sample analytics contains 3 collections, named "accounts", "customers", and "transactions".</p>
        <p>To view a document from each collection, click the correct command for finding 1 document in a collection below!</p>

        <section className='flex flex-row gap-4'>
            <button>find()</button>
            <button>get()</button>
            <button>getOne()</button>
            <button onClick={handleRunFindOneRequests}>findOne()</button>
        </section>

        <span>Check the console!</span>
        
        <p>The syntax of the findOne method allows you to filter for exact matches of properties, or use comparators.</p>
        <p>Comparator operations include lte, lt, gt, gte.</p>
        <p>{`db.transactions.findOne({ reference: 'Lewis Broadhurst' })`}</p>
        <p>{`db.transactions.findOne({ amount: { $lte: 100 } })`}</p>
  </section>
}

export default Find