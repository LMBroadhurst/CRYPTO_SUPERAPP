import React, { useState } from 'react';
import Navigation from './Navigation';
import Socials from './Socials';
import AboutMe from './AboutMe';
import Header from './Header';

const HomeView: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>("AboutMe.tsx");


    return (
        <section className='flex flex-col mx-auto sm:w-3/4 lg:flex-row lg:w-[900px] lg:gap-20 lg:py-32 lg:h-screen xl:w-[1150px]'>
            
            <section className='flex flex-col justify-between p-10 sm:py-32 lg:p-0 lg:w-1/2'>
                
                <section className='flex flex-col gap-8 lg:gap-20'>
                    <Header />

                    <Navigation
                        activeTab={activeTab} 
                    />
                    
                    <div className='lg:hidden'>
                        <Socials />
                    </div>
                </section>
                
                <div className='hidden lg:block'>
                    <Socials />
                </div>
            </section>

            <section className='... lg:hidden'>
                <AboutMe />
            </section>

            <section className='hidden lg:flex lg:w-1/2'>
                {
                    activeTab === "AboutMe.tsx" && <AboutMe />
                    // enter rest of active tabs, i.e. Blog & Content, Work With Me
                }
            </section>
        </section>
    )
}

export default HomeView;