import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col gap-4'>
        <h1 className='text-4xl'>Lewis Broadhurst</h1>

        <h2 className='text-xl'>Full Stack Engineer at 
            <a 
                href='https://mahimarkets.com/' 
                target='_blank'
                className='text-orange-400 transition-colors duration-500 hover:cursor-pointer hover:text-orange-300'
            > MahiMarkets</a>
        </h2>

        <p className='text-md text-slate-400 w-2/3 sm:text-justify sm:4/5'>
            Excited by shipping new products and features that simultaneously provide business value and are aesthetically pleasing.
        </p>

    </section>
  )
}

export default Header
