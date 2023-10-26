"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const index = () => {

    const [findOneFromCollections, setFindOneFromCollections] = useState({
        account: undefined,
        customer: undefined,
        transaction: undefined
    })

    async function callApi(){
        // const { data: accounts } = await axios.get("/api/accounts/getAll")
        // console.log(accounts)

        // const { data: transactions } = await axios.get("/api/transactions/getAll")
        // console.log(transactions)

        // const { data: customers } = await axios.get("/api/customers/getAll")
        // console.log(customers)

        const { data: account } = await axios.get("/api/accounts/getByAccountId/387877")
        setFindOneFromCollections({...findOneFromCollections, account: account})

        const { data: customer } = await axios.get("/api/customers/getByUsername/jessica94")
        setFindOneFromCollections({...findOneFromCollections, customer: customer})

        console.log(findOneFromCollections)
    }

    useEffect(() => {
        callApi()
    }, [])

    return <main>
        <h1>MongoDB Node.JS Path Basics</h1>

        <p>Currently connected via the mongodb node driver to a sample database called "sample_analytics".</p>
        <p>Sample analytics contains 3 collections, named "accounts", "customers", and "transactions".</p>
        <p>To view a document from each collection, click the correct command for finding 1 document in a collection below!</p>

        <section className='flex flex-row gap-4'>
            <button>find()</button>
            <button>get()</button>
            <button>getOne()</button>
            <button>findOne()</button>
        </section>

        {/* @ts-ignore */}
        { findOneFromCollections?.account ? findOneFromCollections.account?.products?.map((prod: any) => <span key={prod}>{prod}</span>) : null }
    </main>
}

export default index