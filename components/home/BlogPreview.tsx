import React, { FC } from 'react';
import PREVIEW from './assets/UNISWAPP2.webp';

type OwnProps = {
    title: string;
    description: string;
    image: string;
    date: string;
}

const BlogPreview: FC<OwnProps> = ({
    title,
    description,
    image,
    date
}) => {

  return (
    <section className='self-stretch'>
        <section className='flex flex-row justify-between items-center gap-8 rounded-lg bg-slate-800 p-4 shadow-md shadow-teal-400 transition-all duration-1000 hover:shadow-purple-400 hover:cursor-pointer hover:-translate-x-1'>
            <section className='flex flex-col gap-2 md:w-7/12'>
                <h3 className='text-xl text-slate-200'>{title}</h3>

                <p className='text-slate-500'>{description}</p>

                <img 
                    src={image} 
                    alt='' 
                    className='rounded-md max-w-xs sm:hidden'
                />

                <span className='text-teal-500'>{date}</span>
            </section>

            <img 
                src={image} 
                alt='' 
                className='hidden w-5/12 rounded-md'
            />
        </section>
    </section>
  )
}

export default BlogPreview
