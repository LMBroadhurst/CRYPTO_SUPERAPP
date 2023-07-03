import React from 'react'

const WorkWithMe = () => {
  return (
    <section 
      className='flex p-10 lg:p-0 lg:w-full'
    >
        <section className='flex flex-col gap-2'>
            <h2 className='text-2xl self-start'>Freelance bookings</h2>

            <section className='flex flex-col gap-5 text-justify'>
              <p className='text-slate-400'>I'm open to all sorts of work, ranging from helping business owners promote their presence online, to tutoring people looking to learn how to code. Please get in contact using the mail link below, where we can organise a call or meetup 😊</p>

              <p className='text-slate-400'>Alternatively, message me on one of my social media platforms, my DMs are always open.</p>

              <section className='text-slate-400 flex flex-col gap-2'>
                <p>What services do I offer?</p>
                <ul className='list-outside list-disc pl-6 flex flex-col gap-1'>
                  <li>Complete website design and build, with continuous consultation from you to determine the direction of the design and functionality.</li>
                  <li>Revamping a website with a more modern look, cleanup of the code, migration to newer technologies, & the removal of old tech debt.</li>
                  <li>Working part-time with you/your company via a pay-per-hour fee.</li>
                  <li>Tuition for people wanting assisstance with learning how to code, focusing on React & Java.</li>
                  <li>Writing technical articles for a blog.</li>
                </ul>
              </section>


              <a
                className='
                  px-6 py-3 rounded-full self-start mt-5 text-lg text-slate-200 bg-cyan-800 
                  hover:shadow-inner hover:bg-cyan-900 
                  '
                  href='mailto:lewis1broadhurst@gmail.com'
              >
                Book a Meeting
              </a>
            </section>
        </section>  
    </section>  
  )
}

export default WorkWithMe