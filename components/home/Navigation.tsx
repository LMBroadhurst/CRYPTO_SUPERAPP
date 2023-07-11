import { NavigationTab } from '@/types/HomeTypes';
import React, { FC } from 'react';

type OwnProps = {
  activeTabKey: string;
  handleTabChange: any;
};

const navTabs: NavigationTab[] = [
  {text: 'About Me', key: 'AboutMe'}, 
  // {text: 'Freelancing', key: 'Freelancing'},
  {text: 'Content', key: 'Content'}, 
  {text: 'Feedback', key: 'Feedback'}
];

const Navigation: FC<OwnProps> = ({
  activeTabKey,
  handleTabChange
}) => {

  return (
    <nav className='hidden lg:flex'>
        <ul className='flex flex-col gap-2 text-lg items-start text-slate-500'>
          {
            navTabs.map(navTab => 
              <li 
                className={`
                   duration-200 transition-all hover:text-orange-600 hover:cursor-pointer hover:translate-x-0.5
                  ${ activeTabKey === navTab.key && 'text-orange-400 translate-x-1'}
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
