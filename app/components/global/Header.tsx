import React from 'react';
import { MenuOutlined } from "@ant-design/icons";

const Header: React.FC = () => {

  return (<header className='bg-gray-600'>
    <section className='flex flex-row justify-between py-2 items-center'>

      <h1>lewisbroadhurst.dev</h1>

      <div className='border w-10 h-10 rounded-full flex flex-col items-center justify-center'>
        <MenuOutlined />
      </div>

      <nav className='hidden'>
        <ul className='flex flex-row items-center gap-8'>
            <li>Blog</li>
            <li>
                <button className='border bg-blue-600 border-blue-400 p-1 px-2 rounded'>Web3 App</button>
            </li>
        </ul>
      </nav>
    </section>
  </header>
  )
}

export default Header