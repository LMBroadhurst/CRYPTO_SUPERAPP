"use client";
import Comparators from "@/components/mongodb/crud/Comparators";
import FindOne from "@/components/mongodb/crud/Find";
import axios from "axios";
import React, { useEffect, useState } from "react";

const index = () => {
  async function callApi() {
    // const { data: accounts } = await axios.get("/api/accounts/getAll")
    // console.log(accounts)
    // const { data: transactions } = await axios.get("/api/transactions/getAll")
    // console.log(transactions)
    // const { data: customers } = await axios.get("/api/customers/getAll")
    // console.log(customers)
  }

  return (
    <main>
      <h1>MongoDB Node.JS Path Basics</h1>

      <FindOne />

      <Comparators />
    </main>
  );
};

export default index;
