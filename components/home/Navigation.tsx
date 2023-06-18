import { NavigationTab } from '@/types/HomeTypes';
import React, { FC } from 'react';

type OwnProps = {
  activeTabKey: string;
  handleTabChange: any;
};

const navTabs: NavigationTab[] = [
  {text: 'About Me', key: 'AboutMe.tsx'}, 
  {text: 'Published Content', key: 'PublishedContent.tsx'}, 
  {text:'Work With Me', key: 'WorkWithMe.tsx'}
];

const Navigation: FC<OwnProps> = ({
  activeTabKey,
  handleTabChange
}) => {

  return (
    <nav className='hidden lg:flex'>
        <ul className='flex flex-col gap-2 text-xl items-start'>
          {
            navTabs.map(navTab => 
              <li 
                className={`
                  duration-200 transition-all hover:text-orange-600 hover:cursor-pointer hover:translate-x-0.5
                  ${ activeTabKey === navTab.key && 'text-orange-500 translate-x-1'}
                `}
                id={navTab.key}
                key={navTab.key}
                onClick={handleTabChange}
              >
                {navTab.text}
              </li>
            )
          }
        </ul>
    </nav>
  )
}

export default Navigation