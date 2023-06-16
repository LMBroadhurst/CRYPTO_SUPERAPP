import React from 'react';
import { GithubOutlined, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';

const Socials = () => {
  return (
    <section className='flex flex-row gap-4 text-3xl'>
        <a href='https://www.linkedin.com/in/lewis-broadhurst/' className='basicOrangeHoverableIcon'><LinkedinFilled /></a>
        <a href='https://github.com/LMBroadhurst' className='basicOrangeHoverableIcon'><GithubOutlined /></a>
        <a href='https://www.youtube.com/channel/UCv8iDXiyBoaNRtPmFt-fOYw' className='basicOrangeHoverableIcon'><YoutubeFilled /></a>
    </section>
  )
}

export default Socials