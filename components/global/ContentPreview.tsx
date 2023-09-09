import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import Chip from './Chip';

type OwnProps = {
    url: string;
    title: string;
    description: React.ReactNode;
    image: StaticImageData;
    date: string;
    tags: string[];
}

const ContentPreview: FC<OwnProps> = ({
    url,
    title,
    description,
    image,
    date,
    tags
}) => {

  return (
    <a 
        className='self-stretch'
        href={url}
        target='_blank'
    >
        <section 
            className='
                flex flex-row justify-between items-center gap-8 rounded-lg p-4 bg-gray-800
                transition-all duration-500 shadow-md shadow-sky-700
                hover:cursor-pointer hover:bg-gray-700 hover:shadow-sky-600'
        >
            <section className='flex flex-col gap-4 text-slate-400'>
                <h3 className='text-lg sm:text-xl text-slate-200'>{title}</h3>

                <p className=''>{description}</p>

                <img 
                    src={image?.src} 
                    alt=''
                    className='rounded-md'
                />

                <section className='flex flex-col-reverse gap-2 justify-between items-center sm:flex-row'>
                    <span className='text-sm'>{date}</span>
                    <section className='flex flex-row justify-end gap-2 text-slate-200 font-medium'>
                        {
                            tags.map(tag => 
                                <Chip 
                                    key={tag}
                                    bgColour='bg-sky-800'
                                >
                                    {tag}
                                </Chip>)
                        }
                    </section>
                </section>
            </section>
        </section>
    </a>
  )
}

export default ContentPreview
