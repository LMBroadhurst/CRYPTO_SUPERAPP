import React, {FC} from 'react'
import {ExportOutlined} from '@ant-design/icons'

type OwnProps = {
  activeTabKey: string
  handleTabChange: any
}

enum NavigationTabs {
  ABOUT_ME = 'About Me',
  PORTFOLIO = 'Portfolio',
  CONTENT = 'Content',
}

const navTabs: NavigationTabs[] = [
  NavigationTabs.ABOUT_ME,
  NavigationTabs.PORTFOLIO,
  NavigationTabs.CONTENT,
]

const Navigation: FC<OwnProps> = ({activeTabKey, handleTabChange}) => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex flex-col gap-2 text-lg items-start text-slate-500">
        {navTabs.map(navTab => (
          <li
            className={`
                   duration-200 transition-all hover:text-orange-600 hover:cursor-pointer hover:translate-x-0.5
                  ${activeTabKey === navTab && 'text-orange-400 translate-x-1'}
                `}
            id={navTab}
            key={navTab}
            onClick={handleTabChange}
          >
            {navTab}
          </li>
        ))}
        <button className="flex items-center gap-2 duration-200 transition-all hover:text-orange-600 hover:cursor-not-allowed hover:translate-x-0.5">
          Blog <ExportOutlined />
        </button>
      </ul>
    </nav>
  )
}

export default Navigation

export {NavigationTabs}
