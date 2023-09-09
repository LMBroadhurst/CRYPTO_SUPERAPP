import React from 'react';
import Chip from '@/components/global/Chip';


const technologies = ['SQL', 'Ansible', 'Java', 'XML/MDML', 'UNIX', 'React', 'JavaScript', 'Spring Boot'];

const BNTA = () => {
  return (
    <section 
      className='bg-slate-800 rounded-lg p-4 flex flex-col gap-4
        shadow-md shadow-cyan-800'
      >
        <section>
          <h3 className='text-2xl font-medium'>BNTA - Junior Full Stack Engineer</h3>
          <span className='text-slate-400 text-sm'>April - December 2022</span>
        </section>

        <p className='text-slate-400'>BNTA is a training and consulting company, where I consulted for Lloyds Banking Group as a Murex Developer.</p>

        <ul className='list-disc list-outside px-6 flex flex-col gap-2 text-slate-400'>
          <li>Built a csv transformation interface that outputs relevant data in an .mdml format on UNIX, improving the transparency of market data coming into LBG (using FTL, XML/Java). Followed agile methodology with daily scrums and kanban boards.</li>
          <li>Troubleshooting & then re-writing SQL queries to understand the edge cases in which unexpected trades passed through to our system.</li>
          <li>Contributed to the L&D committee and volunteered to be the LBG London client rep for BNTA. Used my experience in producing social media content to help BNTA on their journey starting a YouTube channel and podcast.</li>
          <li>Completed an intensive training course covering React, Javascript, Java, Spring Boot, PostgreSQL, Git/GitHub. Built several full stack projects in teams of 3-5 people to test the gained knowledge.</li>
        </ul>

        <section className='flex flex-col gap-4 py-2'>
          <section>
            <ul className='flex flex-row gap-3 flex-wrap justify-center'>
              {
                technologies.map((tech) => <Chip key={tech} bgColour={'bg-cyan-900'}>{tech}</Chip>)
              }
            </ul>
          </section>
        </section>
    </section>
  )
}

export default BNTA