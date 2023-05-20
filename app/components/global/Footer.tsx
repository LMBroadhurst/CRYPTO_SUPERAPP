import React from 'react'
import {BugOutlined} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className={'h-10 bg-blue-300 flex flex-row items-center justify-center gap-1'}>
      <h4>Found a bug?</h4>
      <BugOutlined />
    </div>
  )
}

export default Footer