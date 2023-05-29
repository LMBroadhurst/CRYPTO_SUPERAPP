import React from 'react';
import code from '../../assets/carbon.png';

const HomeView: React.FC = () => {

    return (
        <section className='text-xl px-10 flex flex-col items-center gap-5 lg:flex-row-reverse lg:w-[900px] lg:m-auto lg:gap-10 xl:w-[1150px] xl:gap-20'>
            <img src={code.src} alt="Logo" className='rounded-2xl lg:w-1/2' />

            <section className='flex flex-col gap-5 lg:gap-4 xl:gap-6'>
                <section className='flex flex-col gap-2 text-left lg:gap-4 xl:gap-6'>
                    <h2 className='text-3xl lg:text-4xl xl:text-5xl'>Welcome to my playground!</h2>
                    <p className='text-2xl'>Where I build apps, talk about tech, and experiment with code & coding paradigms.</p>    
                </section>

                <section className='self-stretch flex flex-row justify-evenly lg:justify-start lg:gap-4'>
                    <button className='border py-2 px-8 rounded-xl'>Blog</button>
                    <button className='border bg-white text-gray-800 py-2 px-8 rounded-xl'>Apps</button>
                </section>
            </section>
            
        </section>
    )
}

export default HomeView;