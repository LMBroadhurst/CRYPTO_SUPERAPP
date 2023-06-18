import React, { FC } from 'react';

type OwnProps = {
    activeTab: string;
}

const Navigation: FC<OwnProps> = () => {
  return (
    <nav className='hidden lg:flex'>
        <ul className='flex flex-col gap-2 text-xl items-start'>
            <li className='basicOrangeHoverableText text-orange-400'>About Me</li>
            <li className='basicOrangeHoverableText'>Blog & Content</li>
            <li className='basicOrangeHoverableText'>Work With Me</li>
        </ul>
    </nav>
  )
}

export default Navigation