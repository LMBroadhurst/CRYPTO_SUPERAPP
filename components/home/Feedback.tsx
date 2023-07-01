import React, { FC } from 'react';

type OwnProps = {};

const Feedback: FC<OwnProps> = () => {

  return (
    <section className='mb-32 lg:mb-0'>
      <section className='flex flex-col gap-2 p-10 lg:p-0'>
        <h2 className='text-2xl'>Feedback</h2>

        <section className='flex flex-col gap-5 text-slate-400'>
          <p>When building this website, I wanted to <span className='text-slate-200'>avoid relying on libraries</span> to build components such as cards, tabs, and tooltips, as a challenge to myself. All the code I have produced can be found in this&nbsp;
          <a 
            className='text-orange-400 duration-300 transition-colors hover:text-orange-200'
            href='https://github.com/LMBroadhurst/lewisbroadhurstdev-website'
            target='_blank'
          >
            GitHub repo
          </a>
          , if you'd like to look at how I created and structured my code.</p>

          <p>It has been built using <span className='text-slate-200'>Next.JS & Tailwind CSS</span>. I have been trying to focus on ways to make the Tailwind as efficient as possible, mainly through reading articles from the Tailwind blog. I chose to use Next for the inherent page routing, optional SEO optimisation possibilities, and potential to integrate a simple API into the website in the future. Regarding design, I have been taking notes from Refactoring UI.</p>

          <p>Please <span className='text-slate-200'>feel free to critique the code or design</span>, drop me a message on any of my socials! I plan to evolve this section of the page into an area where people can rate and comment on the components from the website, to improve the experience & my ability to code/design.</p>
        </section>
        
      </section>
    </section>
  )
}

export default Feedback;