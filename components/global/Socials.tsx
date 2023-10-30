import React from 'react'
import {
  GithubOutlined,
  LinkedinFilled,
  MediumSquareFilled,
  YoutubeFilled,
  MailFilled,
} from '@ant-design/icons'
import {SocialItem} from '@/components/home/HomeTypes'

const socials: SocialItem[] = [
  {
    icon: <LinkedinFilled />,
    href: 'https://www.linkedin.com/in/lewis-broadhurst/',
  },
  {icon: <GithubOutlined />, href: 'https://github.com/LMBroadhurst'},
  {
    icon: <YoutubeFilled />,
    href: 'https://www.youtube.com/channel/UCv8iDXiyBoaNRtPmFt-fOYw',
  },
  {
    icon: <MediumSquareFilled />,
    href: 'https://medium.com/@lewis1broadhurst',
  },
  {icon: <MailFilled />, href: 'mailto:lewis1broadhurst@gmail.com'},
]

const Socials = () => {
  return (
    <section className="flex flex-row gap-1 text-3xl text-slate-400">
      {socials.map(social => (
        <a
          href={social.href}
          className="p-2 duration-200 transition-all hover:text-orange-400"
          key={social.href}
          target="_blank"
        >
          {social.icon}
        </a>
      ))}
    </section>
  )
}

export default Socials
