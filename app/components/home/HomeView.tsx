import React from 'react';
import code from '../../assets/carbon.png';

const HomeView: React.FC = () => {

    return (
        <section className='text-xl p-10 flex flex-col gap-10 items-center'>
            <img src={code.src} alt="Logo" className='rounded-2xl' />

            <section className='flex flex-col gap-2 text-left'>
                <h2 className='text-3xl'>Welcome to my playground!</h2>
                <p>Where I build apps, talk about tech, and experiment with code.</p>    
            </section>

            <section className='self-stretch flex flex-row justify-evenly'>
                <button className='border py-2 px-8 rounded-xl'>Blog</button>
                <button className='border bg-white text-gray-800 py-2 px-8 rounded-xl'>Apps</button>
            </section>
        </section>
    )
}

export default HomeView;