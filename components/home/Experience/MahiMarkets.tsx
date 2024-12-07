import Chip from '@/components/global/Chip'
import React from 'react'

const technologies = [
    'Java',
    'SQL',
    'React',
    'AWS',
    'FX'
]

const MahiMarkets = () => {
    return <section className="flex flex-col gap-4 py-6">
        <section>
            <h3 className="text-lg text-slate-200">Mahi Markets - Full Stack Engineer</h3>
            <span className="text-slate-400 text-xs">December 2022 - April 2024</span>
        </section>

        <ul className="list-disc list-outside pl-6 flex flex-col gap-1 text-slate-400">
            <li>Shipping features via a Typescript, Redux, & React client, including order blotters and promotional websites.</li>
            <li>Building FIX adaptors and REST APIs, testing inbound/outbound FIX connections with clients.</li>
            <li>Rotational support duty, working on call for 12hr shifts.</li>
        </ul>

        <ul className="flex flex-row gap-3 flex-wrap">
            {technologies.map(tech => (
                <Chip key={tech} bgColour="bg-cyan-900">
                    {tech}
                </Chip>
            ))}
        </ul>
    </section>
}

export default MahiMarkets
