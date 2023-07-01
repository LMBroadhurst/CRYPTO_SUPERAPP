import React, { FC } from 'react';

type OwnProps = {};

const Feedback: FC<OwnProps> = () => {

  return (
    <section>
      <section className='flex flex-col gap-5'>
        <h2 className='text-4xl'>Feedback</h2>

        <section className='flex flex-col gap-5 text-slate-400'>
          <p>When building this website, I wanted to avoid relying on libraries to build components such as cards, tabs, and tooltips, as a challenge to myself. All the code I have produced can be found in this GitHub repo, if you'd like to look at how I created and structured my code.</p>

          <p>It has been built using Next.JS & Tailwind CSS. I have been trying to focus on ways to make the Tailwind as efficient as possible, mainly through reading articles from the Tailwind blog. I chose to use Next for the inherent page routing, optional SEO optimisation possibilities, and potential to integrate a simple API into the website in the future. Regarding design, I have been taking notes from Refactoring UI.</p>

          <p>Please feel free to critique the code or design, drop me a message on any of my socials! I plan to evolve this section of the page into an area where people can rate and comment on the components from the website, to improve the experience.</p>
        </section>
        
      </section>
    </section>
  )
}

export default Feedback;