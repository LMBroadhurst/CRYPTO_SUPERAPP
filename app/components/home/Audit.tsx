import React from "react";
import { SectionContainer } from "../global/Containers";

type OwnProps = {};

const Audit: React.FC<OwnProps> = () => {

    return (
        <SectionContainer vh={100}>

            <section>Smart Contract Stuff</section>
            

            <section className="flex flex-col mt-4">
                <p>Enter stuff about auditing Smart Contracts here...</p>
                <h3 className='text-2xl lg:text-3xl xl:text-4xl'>Need an Audit?</h3>
                <div className='flex flex-row gap-4 text-lg sm:text-xl'>
                    <button className='border py-2 px-8 rounded-xl'>Book Audit</button>
                    <button className='border bg-white text-gray-800 py-2 px-8 rounded-xl'>My Audit Findings</button>
                </div>
            </section>
        </SectionContainer>
    )
}

export default Audit;