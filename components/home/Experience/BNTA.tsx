import React from 'react';
import Chip from '@/components/global/Chip';


const technologies = ['SQL', 'Ansible', 'Java', 'XML/MDML', 'UNIX', 'React', 'JavaScript', 'Java', 'Spring Boot'];

const BNTA = () => {
  return (
    <section 
      className='bg-slate-800 rounded-lg p-4 flex flex-col gap-4
        shadow-md shadow-emerald-800'
      >
        <section>
          <h3 className='text-2xl font-medium'>BNTA - Junior Full Stack Engineer</h3>
          <span className='text-slate-400 text-sm'>April - December 2022</span>
        </section>


        <p className='text-slate-400'>BNTA is a consulting company, with which I completed a 12 week bootcamp before being placed with a partner employer. Specifically, I worked with Lloyds Banking Group, on the Murex team.</p>

        <span className='text-slate-400'>Responsibilities included:</span>
        <ul className='list-disc list-outside px-6 flex flex-col gap-2 text-slate-400'>
            <li>Building type safe UI components with <span className='text-emerald-400'>Typescript and React</span>. Handling state with <span className='text-emerald-400'>Redux</span> and serialising data via <span className='text-emerald-400'>Protobuf</span>.</li>
            <li>Writing robust server side code in <span className='text-emerald-400'>Java 11</span>, such as FIX adapters and API's. Tested with <span className='text-emerald-400'>JUnit</span>.</li>
            <li>Deploying and configuring apps hosted on Linux <span className='text-emerald-400'>AWS servers</span> with <span className='text-emerald-400'>Jenkins and Capistrano</span>, paired with typical AWS admin.</li>
            <li><span className='text-emerald-400'>Rotational support duty</span>, attending to client requests and issues, in addition to being an emergency contact out of hours.</li>
        </ul>

        <section className='flex flex-col gap-4 py-2'>
          <section>
            <ul className='flex flex-row gap-3 flex-wrap'>
              {
                technologies.map((tech) => <Chip bgColour={'bg-emerald-800'}>{tech}</Chip>)
              }
            </ul>
          </section>
        </section>
    </section>
  )
}

export default BNTA