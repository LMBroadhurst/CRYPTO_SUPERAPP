import React from "react";
import { SectionContainer } from "../global/Containers";

const Experience: React.FC = () => {

    // Can I get a rotating series of icons for react?

    return (
        <SectionContainer vh={100}>
            <section className="w-40 h-40">
                Big rotating frame with react/jave/ts/... symbols
            </section>

            <section className="flex flex-col gap-2">
                <h3 className='text-2xl lg:text-3xl xl:text-4xl'>
                    Everything on this website has been custom built and designed by me, using my favourite bits of tech.
                </h3>
                
                <p>I am continuously documenting the code I write and experiment with, check out the website repo <span className="border-b-2">here</span>.</p>

                <section className="flex flex-col mt-4">
                    <h3 className='text-2xl lg:text-3xl xl:text-4xl'>Want to work with me?</h3>
                    <div className='flex flex-row gap-4 text-lg sm:text-xl'>
                        <button className='border py-2 px-8 rounded-xl'>Freelance</button>
                        <button className='border bg-white text-gray-800 py-2 px-8 rounded-xl'>Permanent</button>
                    </div>
                </section>
            </section>
        </SectionContainer>
    )
}

export default Experience;