import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWalletAddress, logout } from '@/redux/auth/authSlice'
import useGetSigner from '@/hooks/getSigner'
import {Button, Dropdown, Space} from "antd";
import {MenuProps} from "antd/lib";
import {DownOutlined} from "@ant-design/icons";
import Icon from "antd/es/icon";
import ETH from "@/assets/icons8-ethereum-48.png";
import Image from "next/image";
import {SwapOutlined} from "@ant-design/icons";
import Link from "next/link";

const Header: React.FC = () => {

  const dispatch = useDispatch()
  const currentWallet: string = useSelector(selectWalletAddress)
  const { connectSigner} = useGetSigner()

  const apps: MenuProps["items"] = [
    {
      key: 'UNISWAP',
      label: (
          <Link
              className={'flex flex-row justify-between items-center'}
              href={'/uniswapv1'}
          >
            <span>Uniswap V1</span>
            <SwapOutlined />
          </Link>
      ),
    }
  ];

  const testnets: MenuProps['items'] = [
    {
      key: 'SEPOLIA',
      label: <span>Sepolia Testnet</span>,
    },
    {
      key: 'GOERLI',
      label: <span>Goerli Testnet</span>,
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (<header className='bg-gray-600'>
    <div className='flex flex-row justify-between p-10 py-2 items-center'>

      <h1>CRYPTO SUPERAPP</h1>

      <nav>
        <ul className='flex flex-row gap-4 items-center'>
          <li>
            <Dropdown menu={{items: apps}} placement={"bottomRight"} >
              <Button
                  type={'primary'}
                  className={'flex flex-row items-center gap-2'}
              >
                <div className={'flex flex-row items-center gap-2'}>
                  <span>Uniswap V1</span>
                  <SwapOutlined />
                </div>

                <DownOutlined />
              </Button>
            </Dropdown>
          </li>

          <li>
            <Dropdown menu={{items: testnets}} placement={"bottomRight"} >
              <Button
                  type={'primary'}
                  className={'flex flex-row items-center gap-2'}
              >
                <div className={'flex flex-row items-center'}>
                  <span>Sepolia</span>
                  <Image src={ETH} alt={'ETH symbol'} className={'w-4'}/>
                </div>

                <DownOutlined />
              </Button>
            </Dropdown>
          </li>

          <li>
            {
              currentWallet ?
                  // TODO: Create standardised button components or use ANTD
                  <Button
                      onClick={handleLogout}
                  >
                    {currentWallet.slice(0, 4)}...{currentWallet.slice(38)}
                  </Button> :
                  <Button
                      onClick={connectSigner}
                  >
                    Connect Wallet
                  </Button>
            }
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header