import React from 'react'
import BlogPreview from './BlogPreview'
import YoutubePreview from './YoutubePreview'

import PREVIEW from './assets/UNISWAPP2.webp';

const publishedContent = [
  {
    type: 'BLOG',
    title: 'Uniswap V2: The Power of the AMM',
    description: 'Part 2 of an exploration into Uniswap, a powerhouse of DeFi. In this article I explore the Governance and liqudity aspects of the protocol.',
    date: 'May 26th 2023',
    image: PREVIEW.src
  },
  {
    type: 'BLOG',
    title: 'Uniswap V2: The Power of the AMM',
    description: '',
    date: '',
    image: ''
  },
  {
    type: 'BLOG',
    title: 'Uniswap V2: The Power of the AMM',
    description: '',
    date: '',
    image: ''
  },
  {
    type: 'YOUTUBE',
    title: 'Uniswap V2: The Power of the AMM',
    description: '',
    date: '',
    image: ''
  },
  {
    type: 'YOUTUBE',
    title: 'Uniswap V2: The Power of the AMM',
    description: '',
    date: '',
    image: ''
  },
]

const PublishedContent = () => {

  const contentToRender = publishedContent.map(pc => {
    
    if (pc.type === 'YOUTUBE') {
      return (
        <YoutubePreview 
          title={pc.title}
          description={pc.description}
          image={pc.image}
          date={pc.date}
        />
      )
    }

    return (
      <BlogPreview
        title={pc.title}
        description={pc.description}
        image={pc.image}
        date={pc.date}
      />
    )

  });


  return (
    <section className='flex p-10 lg:p-0 lg:w-full'>
        <section className='flex flex-col gap-5'>
            <h2 className='text-3xl self-start'>Content</h2>

            <p className='text-slate-400 xl:text-lg'>Since becoming a software engineer I have created a range of content, ranging from <span className='text-orange-400'>YouTube tutorials</span> and informative <span className='text-orange-400'>blogs on Web3 technologies</span>. I've found it to be a great learning experience for my own development, and hopefully has allowed others to gain understanding of the topics I have covered.</p>

            <p className='text-slate-400 xl:text-lg'>Check out some of my blogs and YouTube videos below.</p>

            <section className='flex flex-col gap-5 my-10'>
              {contentToRender}
            </section>
        </section>  
    </section>  
  )
}

export default PublishedContent