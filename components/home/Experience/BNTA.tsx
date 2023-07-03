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
          <li>Learned an XML/Java superset language (FTL) from documentation and code examples to build a <span className='text-emerald-400'>csv transformation interface</span> that outputs relevant data in an .mdml format on UNIX.</li>
          <li><span className='text-emerald-400'>Improved the transparency of market data</span> by coding an FTP system that directly converts market data received from Bloomberg & Refinitiv into the Murex system.</li>
          <li>Participated in several side of desk tasks, including joining and <span className='text-emerald-400'>contributing the the L&D committee</span> and being the <span className='text-emerald-400'>LBG London client representative</span> for BNTA</li>
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