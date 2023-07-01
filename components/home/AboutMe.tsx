import React from 'react'

const AboutMe = () => {
  return (
    <section className='flex p-10 lg:p-0 lg:w-full'>
        <section className='flex flex-col gap-2'>
            <h2 className='text-2xl self-start font-medium'>About Me</h2>

            <section className='flex flex-col gap-5 text-slate-500 text-justify'>
              <p>After looking at a change of career into something I would truly enjoy doing daily, I began to get interested in the idea of software engineering. The idea of gaining the ability to <span className='text-slate-200'>build functional programs</span>, <span className='text-slate-200'>experiment with new ideas</span>, and <span className='text-slate-200'>learn more about the world of tech</span> convinced me to give it a shot.</p>

              <p>November 2021, I decided to take the career transition seriously. I comitted to a '100 days of code' challenge, and started building all sorts of basic programs and websites. <span className='text-slate-200'>After a few weeks I was certain software engineering was the right choice for me</span>, so I decided to complete a bootcamp that allowed me to upskill quickly in an intensive 12 week course.</p>

              <p>Since then, I have proudly been <span className='text-slate-200'>employed as a Full Stack Engineer</span> for a large UK retail bank, and currently work for an innovative FX focused fintech company.</p>

              <p><span className='text-slate-200'>Outside of work</span>, I spend my time trying out new languages and programming paradigms, blogging about Web3, lifting weights in a gym that needs far better AC, and roaming around London.</p>
            </section>
            
            {/* TODO: Build some components for displaying tech related experience */}
        </section>  
    </section>  
  )
}

export default AboutMe