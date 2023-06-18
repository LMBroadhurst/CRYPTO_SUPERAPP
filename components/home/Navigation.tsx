import React, { FC } from 'react';

type OwnProps = {
    activeTab: string;
};

const listItems: string[] = ['About Me', 'Published Content', 'Work With Me'];

const Navigation: FC<OwnProps> = () => {
  
  return (
    <nav className='hidden lg:flex'>
        <ul className='flex flex-col gap-2 text-xl items-start'>
          {
            listItems.map(listItem => 
              <li 
                className='duration-200 transition-all hover:text-orange-300 hover:cursor-pointer'
              >
                {listItem}
              </li>
            )
          }
        </ul>
    </nav>
  )
}

export default Navigation