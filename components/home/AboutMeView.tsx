import React from 'react'
import MahiMarkets from './Experience/MahiMarketsCard'
import BNTA from './Experience/BNTACard'
import Vanguard from './Experience/Vanguard'

const Home = () => {
    return <section>
        <section className="flex flex-col gap-2">
            <h2 className="text-2xl self-start">About Me</h2>
            <section className="flex flex-col gap-5 text-slate-500 text-justify">Lorem Ipsum</section>
        </section>

        <section className="pt-6 flex flex-col gap-6">
            <h2 className="text-2xl self-start -mb-2">Experience</h2>
            <section className='flex flex-col gap-8'>
                <Vanguard />
                <MahiMarkets />
                <BNTA />
            </section>
        </section>
    </section>
}

export default Home
