import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h1 className='text-4xl xl:text-5xl'>Lewis Broadhurst</h1>

        <h2 className='text-xl xl:text-2xl'>Full Stack Engineer at 
            <a 
                href='https://mahimarkets.com/' 
                target='_blank'
                className='text-orange-500 transition-colors duration-500 hover:cursor-pointer hover:text-orange-300'
            > MahiMarkets</a>
        </h2>

        <h3 className='text-md text-slate-500 w-2/3 sm:4/5'>I build full stack websites/apps that generate revenue for businesses and provide seamless experiences for users.</h3>
    </section>
  )
}

export default Header