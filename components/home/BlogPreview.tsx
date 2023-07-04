import React, { FC } from 'react';
import { StaticImageData } from 'next/image';
import Chip from '../global/Chip';

type OwnProps = {
    url: string;
    title: string;
    description: string;
    image: StaticImageData;
    date: string;
    tags: string[];
}

const BlogPreview: FC<OwnProps> = ({
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
                flex flex-row justify-between items-center gap-8 rounded-lg p-4 bg-blue-700
                transition-all duration-500 bg-opacity-10 shadow-md shadow-sky-700
                hover:cursor-pointer hover:shadow-sky-400 hover:bg-gray-900'
        >
            <section className='flex flex-col gap-4'>
                <h3 className='text-lg sm:text-xl text-slate-200'>{title}</h3>

                <p className='text-slate-500'>{description}</p>

                <img 
                    src={image?.src} 
                    alt=''
                    className='rounded-md'
                />

                <section className='flex flex-row justify-between items-center'>
                    <span className='text-sm text-slate-500'>{date}</span>
                    <section className='flex flex-row justify-end gap-2'>
                        {
                            tags.map(tag => 
                                <Chip bgColour='bg-sky-800'>
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

export default BlogPreview
