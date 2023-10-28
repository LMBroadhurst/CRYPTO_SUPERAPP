"use client"
import Comparators from '@/components/mongodb/Comparators'
import FindOne from '@/components/mongodb/FindOne'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const index = () => {

    async function callApi(){
        // const { data: accounts } = await axios.get("/api/accounts/getAll")
        // console.log(accounts)

        // const { data: transactions } = await axios.get("/api/transactions/getAll")
        // console.log(transactions)

        // const { data: customers } = await axios.get("/api/customers/getAll")
        // console.log(customers)
    }

    return <main>
        <h1>MongoDB Node.JS Path Basics</h1>

        <FindOne />

        <h2>find()</h2>
        <p>To read all the documents that are stored in a collection, we can use find() with no query parameter.</p>
        <p>We can also use a query here, similarly to findOne(), that will get all documents that match the performed query. THe comparators work here too as expected.</p>
        <p>{`db.transactions.find({ bank: 'Santander', amount: { $gt: 1000 } })`}</p>
        <p>{`db.transactions.find({ amount: { $eq: 100 } })`}</p>

        <Comparators />

    </main>
}

export default index