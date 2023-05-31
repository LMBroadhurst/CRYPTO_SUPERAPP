import React from "react";
import { SectionContainer } from "../global/Containers";

type OwnProps = {};

const Blog: React.FC<OwnProps> = () => {

    return (
        <SectionContainer vh={100}>
            <section>
                <h3>Latest Blog Post</h3>
            </section>

            <section className="flex flex-col gap-4">
                <p className="text-2xl">Check out my Blog and YouTube channel to learn more about the world of Tech & what I'm building.</p>

                <p>I have produced a variety of content, from Web3 DeFi protocol overviews to Tailwind CSS tutorials.</p>

                <section className="flex flex-row gap-4">
                    <button className='border py-2 px-8 rounded-xl bg-white text-gray-800'>Blog</button>
                    <button className='border py-2 px-8 rounded-xl'>YouTube</button>
                </section>
            </section>

        </SectionContainer>
    )
}

export default Blog;