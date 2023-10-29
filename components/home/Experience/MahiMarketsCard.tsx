import Chip from '@/components/global/Chip';
import React from 'react'

const technologies = ['React', 'TypeScript', 'Redux', 'Java', 'SQL', 'Styled Components', 'AWS', 'Protobuf', 'FIX'];

const MahiMarkets = () => {
  return (
    <section 
      className='bg-slate-800 rounded-lg p-4 flex flex-col gap-4
        shadow-md shadow-cyan-800'
      >
        <section>
          <h3 className='text-2xl font-medium text-slate-200'>Mahi Markets - Full Stack Engineer</h3>
          <span className='text-slate-400 text-sm'>December 2022 - Present</span>
        </section>

        <p className='text-slate-400'>Mahi Markets is an innovative FinTech company that provides SaaS to FX brokers.</p>

        <ul className='list-disc list-outside px-6 flex flex-col gap-2 text-slate-400'>
          <li>Improving products offered by shipping new features for our clients via UI components built with Typescript & React. Removing tech debt by refactoring code to meet modern React/JS/TS standards (ES6, React 18). Fluent using advanced react patterns such as custom hooks and useMemo & useCallback for performance. Plumbing Async Redux Epics and Ajax HTTP methods up to the REST API.</li>
          <li>Designing and improving user stories. Proudly reworked a complicated form to increase the usability of the product and guide clients through the process with confidence.</li>
          <li>Building FIX adaptors and REST APIs, tested with Junit and written in Java18. Deploying our apps onto CentOS linux servers via AWS S3 Tarballs. Securing servers by creating relevant IAM roles, inline policies, whitelisting, etc.</li>
          <li>Agile methodology with morning standups, tickets via Jira, PRs with Git/GitHub.Rotational 2nd line support duty, working on call for 12hr shifts.</li>
        </ul>

        <section className='flex flex-col gap-4 py-2'>
          <section>
            <ul className='flex flex-row gap-3 flex-wrap justify-center'>
              {
                technologies.map((tech) => <Chip key={tech} bgColour='bg-cyan-900'>{tech}</Chip>)
              }
            </ul>
          </section>
        </section>
    </section>
  )
}

export default MahiMarkets