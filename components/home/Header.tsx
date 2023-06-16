import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h1 className='text-5xl'>Lewis Broadhurst</h1>

        <h2 className='text-2xl'>Full Stack Engineer at 
            <a 
                href='https://mahimarkets.com/' 
                className='text-orange-500 transition-colors duration-500 hover:cursor-pointer hover:text-orange-300'
            > MahiMarkets</a>
        </h2>

        <h3 className='text-slate-400 w-2/3'>I build full stack websites/apps that create revenue for businesses and provide great experiences for users.</h3>
    </section>
  )
}

export default Header