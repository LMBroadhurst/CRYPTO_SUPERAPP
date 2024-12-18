import React from 'react'

type CodingCertificationProps = {
    title: string;
    dates: string;
}

const CodingCertification = ({ title, dates }: CodingCertificationProps) => {
    return <section className="flex flex-col gap-1 py-2">
        <h3 className="text-lg text-slate-200">{title}</h3>
        <span className="text-slate-400 text-xs">{dates}</span>
    </section>
}

export default CodingCertification
