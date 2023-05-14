import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWalletAddress, logout } from '@/redux/auth/authSlice'
import useGetSigner from '@/hooks/getSigner'
import {Button, Dropdown, Space} from "antd";
import {MenuProps} from "antd/lib";

const Header: React.FC = () => {

  const dispatch = useDispatch()
  const currentWallet: string = useSelector(selectWalletAddress)
  const { connectSigner} = useGetSigner()

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
      ),
    },
    {
      key: '2',
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
      ),
    },
    {
      key: '3',
      label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
      ),
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className='bg-gray-200'>
      <div className='flex flex-row justify-between p-10 py-5 items-center'>
        <h1>CRYPTO SUPERAPP</h1>

        <nav>
          <ul className='flex flex-row gap-8 items-center'>
            <li>
              <Dropdown menu={{ items }} placement={"bottomRight"} >
                <Button type={'primary'}>Ello</Button>
              </Dropdown>
            </li>
            <li>
              {
                currentWallet ?
                    // TODO: Create standardised button components or use ANTD
                    <button
                        onClick={handleLogout}
                    >
                      {currentWallet.slice(0, 4)}...{currentWallet.slice(38)}
                    </button> :
                    <button
                        className='bg-black p-2 rounded-lg text-white'
                        onClick={connectSigner}
                    >
                      Connect Wallet
                    </button>
              }
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header