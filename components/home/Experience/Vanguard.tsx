import React from 'react'
import Chip from '@/components/global/Chip'

const technologies = [
    'Java',
    'SQL',
    'Vue',
    'Typescript',
    'Equities',
]

const Vanguard = () => {
    return <section className="bg-slate-800 rounded-lg p-4 flex flex-col gap-4 shadow-sm shadow-cyan-800">
        <section>
            <h3 className="text-lg">
                Vanguard - Full Stack Application Engineer
            </h3>
            <span className="text-slate-400 text-xs">
                April 2023 - Present
            </span>
        </section>

        <ul className="list-disc list-outside pl-6 flex flex-col gap-2 text-slate-400">
            <li>
                Concise point 1...
            </li>

            <li>
                Concise point 2...
            </li>

            <li>
                Concise point 3...
            </li>
        </ul>

        <ul className="flex flex-row gap-3 flex-wrap">
            {technologies.map(tech => (
                <Chip key={tech} bgColour={'bg-cyan-900'}>
                    {tech}
                </Chip>
            ))}
        </ul>
    </section>
}

export default Vanguard
