import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWalletAddress } from '../redux/auth/authSlice'

const Header: React.FC = () => {

  const dispatch = useDispatch()
  const currentWallet: string = useSelector(selectWalletAddress)

  return (
    <header className='bg-gray-200'>
      <div className='flex flex-row justify-between p-10 items-center'>
        <h1>CRYPTO SUPERAPP</h1>

        <nav>
          <ul className='flex flex-row gap-8 items-center'>
            <li>Home</li>
            <li>
              {
                currentWallet ? <p>{currentWallet}</p> : <button className='bg-black p-2 rounded-lg text-white'>Connect Wallet</button>
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header