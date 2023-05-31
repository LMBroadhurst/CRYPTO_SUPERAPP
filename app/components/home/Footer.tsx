import React from 'react'
import {BugOutlined, GithubOutlined, LinkedinFilled, LinkedinOutlined} from "@ant-design/icons";
import { CenteredContainer } from '../global/Containers';

const Footer = () => { 
  
  
  return (
    <footer className='p-4 h-[15vh] flex flex-col items-start gap-1 border'>
      <span>Built by Lewis Broadhurst</span>
      <div className='flex flex-row gap-2 justify-center'>
        <CenteredContainer><GithubOutlined /></CenteredContainer>
        <CenteredContainer><LinkedinFilled /></CenteredContainer>
      </div>
      <div className={'flex flex-row items-center justify-center gap-2 h-full'}>
        <h4>Report a bug</h4>
        <BugOutlined />
      </div>
    </footer>
  )
}

export default Footer