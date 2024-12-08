import React, { FC } from 'react'
import { StaticImageData } from 'next/image'
import Chip from './Chip'
import Link from 'next/link'

type OwnProps = {
    url: string
    title: string
    description: React.ReactNode
    image: StaticImageData
    date: string
    tags: string[]
}

const ContentPreview: FC<OwnProps> = ({
    url,
    title,
    description,
    image,
    date,
    tags,
}) => {
    return <Link className="self-stretch" href={url} target="_blank">
            <section className="flex flex-row justify-between items-center gap-8 rounded-lg p-4 bg-gray-800
                transition-all duration-500 shadow-sm shadow-sky-700 hover:cursor-pointer hover:bg-gray-900"
            >
                <section className="flex flex-col gap-4 text-slate-400">
                    <h3 className="text-lg sm:text-xl text-slate-200">{title}</h3>
                    <section className='text-sm md:text-md'>{description}</section>
                    <img src={image?.src} alt="" className="rounded-md"/>

                    <section className="flex flex-col gap-2 justify-between xl:items-center xl:flex-row">
                        <section className="flex flex-row gap-2 text-slate-200 font-medium xl:justify-end">
                            {tags.map(tag => (
                                <Chip key={tag} bgColour="bg-sky-800">
                                    {tag}
                                </Chip>
                            ))}
                        </section>
                        <span className="text-sm">{date}</span>
                    </section>
                </section>
            </section>
        </Link>
}

export default ContentPreview
