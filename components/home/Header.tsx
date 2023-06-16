import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col gap-4'>
        <p className='text-5xl'>Lewis Broadhurst</p>

        <p className='text-2xl'>Full Stack Engineer at 
            <a 
                href='https://mahimarkets.com/' 
                className='text-orange-500 transition-colors duration-500 hover:cursor-pointer hover:text-orange-300'
            > MahiMarkets</a>
        </p>

        <p className='text-slate-400 w-2/3'>I build full stack websites/apps that have tangible benefits for businesses and users.</p>
    </section>
  )
}

export default Header