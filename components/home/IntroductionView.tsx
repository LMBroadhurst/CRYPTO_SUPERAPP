import React, { useState } from 'react';
import Navigation from './Navigation';
import Socials from './Socials';
import AboutMe from './AboutMe';
import Header from './Header';
import PublishedContent from './PublishedContent';
import WorkWithMe from './WorkWithMe';

const HomeView: React.FC = () => {

    const [activeTabKey, setActiveTabKey] = useState<string>("AboutMe.tsx");

    const handleTabChange = (e: any) => {
        console.log(e.target.id);
        setActiveTabKey(e.target.id);
    };


    return (
        <section className='flex flex-col mx-auto sm:w-3/4 lg:flex-row lg:w-[900px] lg:gap-20 lg:py-32 lg:h-screen xl:w-[1150px]'>
            
            <section className='flex flex-col justify-between p-10 sm:py-32 lg:p-0 lg:w-1/2'>
                
                <section className='flex flex-col gap-8 lg:gap-20'>
                    <Header />

                    <Navigation
                        activeTabKey={activeTabKey} 
                        handleTabChange={handleTabChange}
                    />
                    
                    <div className='lg:hidden'>
                        <Socials />
                    </div>
                </section>
                
                <div className='hidden lg:block'>
                    <Socials />
                </div>
            </section>

            <section className='flex flex-col gap-10 lg:hidden'>
                <AboutMe />

                <PublishedContent />

                <WorkWithMe />
            </section>

            <section className='hidden lg:flex lg:w-1/2'>
                {
                    activeTabKey === "AboutMe.tsx" && <AboutMe /> 
                    || 
                    activeTabKey === "PublishedContent.tsx" && <PublishedContent /> 
                    ||
                    activeTabKey === "WorkWithMe.tsx" && <WorkWithMe />
                }
            </section>
        </section>
    )
}

export default HomeView;