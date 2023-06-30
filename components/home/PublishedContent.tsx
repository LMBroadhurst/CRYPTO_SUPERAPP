import React from 'react'
import BlogPreview from './BlogPreview'
import YoutubePreview from './YoutubePreview'

import UNISWAPP1 from './assets/UNISWAP1.webp'
import UNISWAPP2 from './assets/UNISWAPP2.webp';
import ERC20 from './assets/ERC20.webp';

const publishedContentPreview = [
  {
    type: 'BLOG',
    title: 'Uniswap V2: The Power of the AMM',
    description: 'Part 2 of an exploration into Uniswap, a powerhouse of DeFi. In this article I explore the Governance and liquidity aspects of the protocol.',
    date: 'May 26th 2023',
    image: UNISWAPP2
  },
  {
    type: 'BLOG',
    title: 'Uniswap V2: The Power of the AMM',
    description: 'Part 1 of an exploration into Uniswap, specifically focusing on the mechanics of how AMMs/DEXs work. Great introduction into DeFi and the benefits of DeFi for anyone new to the space.',
    date: 'May 19th 2023',
    image: UNISWAPP1
  },
  {
    type: 'BLOG',
    title: 'ERC20: What & Why?',
    description: 'A dive into the history of ERC20 tokens, how they came into existence, what they acheive, and why they are an important standard in the crypto space.',
    date: 'May 12th 2023',
    image: ERC20
  }
]

const PublishedContent = () => {

  const contentToRender = publishedContentPreview.map(pc => {
    
    if (pc.type === 'YOUTUBE') {
      return (
        <YoutubePreview 
          key={pc.date}
          title={pc.title}
          description={pc.description}
          image={pc?.image}
          date={pc.date}
        />
      )
    }

    return (
      <BlogPreview
        key={pc.date}
        title={pc.title}
        description={pc.description}
        image={pc?.image}
        date={pc.date}
      />
    )

  });


  return (
    <section className='flex flex-col gap-10 lg:p-0 lg:w-full'>
        <section className='flex flex-col gap-5 px-5'>
            <h2 className='text-3xl self-start'>Content</h2>

            <p className='text-slate-500'>Since becoming a software engineer I have created a range of content, ranging from <span className='text-slate-200'>YouTube tutorials</span> and informative <span className='text-slate-200'>blogs on Web3 technologies</span>.</p>
            
            <p className='text-slate-500'>I've found it to be a great learning experience for my own development, and hopefully has allowed others to gain understanding of the topics I have covered.</p>

            <p className='text-slate-500'>Check out some of my blogs and YouTube videos below.</p>
        </section>  
        <section className='flex flex-col gap-5'>
          {contentToRender}
        </section>
    </section>  
  )
}

export default PublishedContent