import React from 'react';
import { GithubOutlined, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';
import { SocialItem } from '@/types/HomeTypes';

const socials: SocialItem[] = [
  {icon: <LinkedinFilled />, href: 'https://www.linkedin.com/in/lewis-broadhurst/'},
  {icon: <GithubOutlined />, href: 'https://github.com/LMBroadhurst'},
  {icon: <YoutubeFilled />, href: 'https://www.youtube.com/channel/UCv8iDXiyBoaNRtPmFt-fOYw'}
]

const Socials = () => {
  return (
    <section className='flex flex-row gap-1 text-3xl'>
      {
        socials.map(social => 
          <a 
            href={social.href} 
            className='p-2 duration-200 transition-all hover:text-orange-400'
            key={social.href}
          >{social.icon}</a>
        )
      }
    </section>
  )
}

export default Socials