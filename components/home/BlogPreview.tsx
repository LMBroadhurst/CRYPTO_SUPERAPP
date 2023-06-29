import React, { FC } from 'react';
import { StaticImageData } from 'next/image';

type OwnProps = {
    title: string;
    description: string;
    image: StaticImageData;
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
        <section 
            className='flex flex-row justify-between items-center gap-8 rounded-lg bg-slate-800 p-6 shadow-md shadow-teal-400 
                transition-all duration-1000 hover:shadow-purple-400 hover:cursor-pointer hover:-translate-x-1'
        >
            <section className='flex flex-col gap-4'>
                <h3 className='text-lg sm:text-xl text-slate-200'>{title}</h3>

                <p className='text-slate-500'>{description}</p>

                <img 
                    src={image.src} 
                    alt=''
                    className='rounded-md'
                />

                <span className='text-sm text-slate-500'>{date}</span>
            </section>

            {/* <img 
                src={image.src} 
                alt='' 
                className='hidden w-5/12 rounded-md xl:flex'
            /> */}
        </section>
    </section>
  )
}

export default BlogPreview
