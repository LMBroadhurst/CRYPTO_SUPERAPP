import React from 'react'
import {BugOutlined} from "@ant-design/icons";

const Footer = () => { 
  
  
  return (
    <footer className='p-4 h-[15vh]'>
      <section className={'flex flex-row items-center justify-center gap-2 h-full'}>
        <h4>Report a bug</h4>
        <BugOutlined />
      </section>
    </footer>
  )
}

export default Footer