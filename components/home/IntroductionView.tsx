import React, { useState } from 'react';
import Navigation from './Navigation';
import Socials from './Socials';
import AboutMe from './AboutMe';
import Header from './Header';

const HomeView: React.FC = () => {

    const [activeTab, setActiveTab] = useState<string>("AboutMe.tsx");


    return (
        <section className='mx-auto flex flex-row gap-20 xl:py-32 xl:h-screen xl:w-[1150px]'>
            <section className='w-1/2 flex flex-col justify-between'>
                <section className='flex flex-col gap-20'>
                    <Header />

                    {/* TODO: Create tabbing from the 3 items */}
                    <Navigation />
                </section>
                
                <Socials />
            </section>


            {
                activeTab === "AboutMe.tsx" && <AboutMe />
            }
        </section>
    )
}

export default HomeView;