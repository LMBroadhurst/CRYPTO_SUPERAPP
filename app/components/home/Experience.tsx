import React from "react";

const Experience: React.FC = () => {

    // Can I get a rotating series of icons for react?

    return (
        <section className="flex flex-col gap-4 text-xl">
            <section>
                <h3 className='text-2xl lg:text-3xl xl:text-4xl'>Everything on this website has been custom built and designed by me.</h3>
                <p>Using my favourite pieces of tech.</p>
            </section>
            <section className='self-stretch flex flex-row-reverse justify-evenly lg:justify-start lg:gap-4'>
                <button className='border py-2 px-8 rounded-xl'>Freelance</button>
                <button className='border bg-white text-gray-800 py-2 px-8 rounded-xl'>Permanent</button>
            </section>
        </section>
    )
}

export default Experience;