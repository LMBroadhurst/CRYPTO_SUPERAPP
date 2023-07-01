import React from 'react'

const WorkWithMe = () => {
  return (
    <section className='flex p-10 lg:p-0 lg:w-full'>
        <section className='flex flex-col gap-2'>
            <h2 className='text-2xl self-start'>Freelance bookings</h2>

            <section className='flex flex-col gap-5'>
              <p className='text-slate-400'>I love to help business owners and entrepeneurs promote their presence online with effective websites. Please get in contact using the mail link below, where we can organise a call or meetup and see if we are compatible.</p>

              <p className='text-slate-400'>Alternatively, message me on one of my social media platforms, my DMs are always open.</p>

              <a
                className='
                  px-8 py-4 rounded-full self-start mt-5 text-lg text-slate-900 
                  bg-slate-300 shadow-sm
                  hover:shadow-inner 
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