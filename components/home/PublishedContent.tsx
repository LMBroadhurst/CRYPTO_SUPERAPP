import React from 'react'
import { SmileOutlined } from '@ant-design/icons'
import BlogPreview from './BlogPreview'
import Blog from '../blog/Blog'
import YoutubePreview from './YoutubePreview'

const PublishedContent = () => {
  return (
    <section className='flex p-10 lg:p-0 lg:w-full'>
        <section className='flex flex-col gap-5'>
            <h2 className='text-3xl self-start'>Content</h2>

            <p className='text-slate-400 xl:text-lg'>Since becoming a software engineer I have created a range of content, ranging from <span className='text-orange-400'>YouTube tutorials</span> and informative <span className='text-orange-400'>blogs on Web3 technologies</span>. I've found it to be a great learning experience for my own development, and hopefully has allowed others to gain understanding of the topics I have covered.</p>

            <p className='text-slate-400 xl:text-lg'>Check out some of my blogs and YouTube videos below.</p>

            <section className='flex flex-col gap-5 my-10'>
              <BlogPreview />

              <BlogPreview />

              <YoutubePreview />

              <YoutubePreview />

              <BlogPreview />

              <YoutubePreview />
            </section>
        </section>  
    </section>  
  )
}

export default PublishedContent