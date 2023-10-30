import React from "react";
import Head from "next/head";
import Introduction from "@/components/home/IntroductionView";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lewis Broadhurst</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-slate-50 bg-slate-900 flex flex-col">
        <Introduction />
      </main>
    </>
  );
}
