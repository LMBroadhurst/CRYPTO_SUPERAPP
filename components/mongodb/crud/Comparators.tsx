import React from 'react'

const Comparators = () => {
  return <section>
    <h2>Comparators (Comparison Operators)</h2>
    <h4>Here we will use the customers collection as it has the richest array of data.</h4>

    <h5>For Basic Data</h5>
    <li className='flex flex-row gap-2'>
        <ul>$eq: Matches value that are equal to the specified value</ul>
        <ul>$ne: ...that are not equal...</ul>
        <ul>$gt: ...that are greater than... </ul>
        <ul>$gte: ...that are greater than or equal to...</ul>
        <ul>$lt: ...less than...</ul>
        <ul>$lte: ...less than or equal to...</ul>
    </li>

    <h5>For Arrays</h5>
    <li>
        <ul>$in: Matches any of the values specified in the array</ul>
        <ul>$nin: Matches none of the values specified in an array</ul>
    </li>
    
  </section>
}

export default Comparators