import Chip from '@/components/global/Chip';
import React from 'react'

const technologies = ['React', 'TypeScript', 'Redux', 'Java', 'SQL', 'Styled Components', 'AWS', 'Protobuf'];

const MahiMarkets = () => {
  return (
    <section 
      className='bg-slate-800 rounded-lg p-4 flex flex-col gap-4
        shadow-md shadow-cyan-800'
      >
        <section>
          <h3 className='text-2xl font-medium'>Mahi Markets - Full Stack Engineer</h3>
          <span className='text-slate-400 text-sm'>December 2022 - Present</span>
        </section>


        <p className='text-slate-400'>Mahi Markets is an innovative FinTech company that primarily provides software to FX exchanges, which drives PnL, protects against toxic clients, allows for the production of bespoke pricing, and more.</p>

        <span className='text-slate-400'>Responsibilities include:</span>
        <ul className='list-disc list-outside px-6 flex flex-col gap-2 text-slate-400'>
            <li>Building type safe UI components with <span className='text-cyan-400'>Typescript and React</span>. Handling state with <span className='text-cyan-400'>Redux</span> and serialising data via <span className='text-cyan-400'>Protobuf</span>.</li>
            <li>Writing robust server side code in <span className='text-cyan-400'>Java 11</span>, such as FIX adapters and API's. Tested with <span className='text-cyan-400'>JUnit</span>.</li>
            <li>Deploying and configuring apps hosted on Linux <span className='text-cyan-400'>AWS servers</span> with <span className='text-cyan-400'>Jenkins and Capistrano</span>, paired with typical AWS admin.</li>
            <li><span className='text-cyan-400'>Rotational support duty</span>, attending to client requests and issues, in addition to being an emergency contact out of hours.</li>
        </ul>

        <section className='flex flex-col gap-4'>
          <section>
            <ul className='flex flex-row gap-3 flex-wrap'>
              {
                technologies.map((tech) => <Chip>{tech}</Chip>)
              }
            </ul>
          </section>
        </section>
    </section>
  )
}

export default MahiMarkets