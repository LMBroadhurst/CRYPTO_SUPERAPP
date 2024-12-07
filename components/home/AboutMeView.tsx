import React from 'react'
import MahiMarkets from './Experience/MahiMarketsCard'
import BNTA from './Experience/BNTACard'

const AboutMe = () => {
    return (
        <section className="">
            <section className="flex flex-col gap-2">
                <h2 className="text-2xl self-start">About Me</h2>

                <section className="flex flex-col gap-5 text-slate-500 text-justify">Lorem Ipsum</section>

                <section className="pt-6 flex flex-col gap-6">
                    <h2 className="text-2xl self-start -mb-2">Experience</h2>

                    <MahiMarkets />

                    <BNTA />
                </section>
            </section>
        </section>
    )
}

export default AboutMe
