import React from 'react'
import MahiMarkets from './Experience/MahiMarkets'
import BNTA from './Experience/BNTA'
import Vanguard from './Experience/Vanguard'

const HomeView = () => {
    return <section className='flex flex-col gap-8'>
        <section className="flex flex-col gap-4 divide-y divide-slate-700">
            <h2 className="text-2xl self-start text-slate-300">About Me</h2>
            <section className="flex flex-col text-slate-500 text-justify py-6">
                Finance orientated software engineer with nearly 3 years experience in the FX and Equities sectors, ranging from smaller tech providers to one of the biggest asset managers worldwide. 
                Comfortable in high pressure and high stakes environments, with the ability to work across the whole technology stack.
                Excited by working in closely knit teams and delivering impactful software.
            </section>
        </section>

        <section className='flex flex-col gap-4 divide-y divide-slate-700'>
            <h2 className="text-2xl self-start text-slate-300">Experience</h2>
            <Vanguard />
            <MahiMarkets />
            <BNTA />
        </section>
    </section>
}

export default HomeView
