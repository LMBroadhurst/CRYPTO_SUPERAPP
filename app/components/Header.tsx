import React from 'react'

const Header: React.FC = () => {
  return (
    <header className='bg-gray-200'>
      <div className='flex flex-row justify-between p-10 items-center'>
        <h1>CRYPTO SUPERAPP</h1>

        <nav>
          <ul className='flex flex-row gap-8 items-center'>
            <li>Home</li>
            <li>
              <button className='bg-black p-2 rounded-lg text-white'>Connect Wallet</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header