import React from 'react'
import UNISWAPP1 from './assets/UNISWAP1.webp'
import UNISWAPP2 from './assets/UNISWAPP2.webp'
import ERC20 from './assets/ERC20.webp'
import TAILWIND from './assets/Tailwind.jpg'
import FLEXBOX from './assets/Flexbox.jpg'
import { CardContents } from '@/components/home/HomeTypes'
import ContentPreview from '../global/ContentPreview'

const publishedContentPreview: CardContents[] = [
    {
        url: 'https://medium.com/block-magnates/uniswap-v2-the-power-of-the-amm-b53bb60450be',
        title: 'Uniswap V2: The Power of the AMM',
        description: (
            <p>
                Part 2 of an exploration into Uniswap, a powerhouse of DeFi. In
                this article I explore the Governance and liquidity aspects of
                the protocol.
            </p>
        ),
        date: 'May 2023',
        image: UNISWAPP2,
        tags: ['AMM', 'Web3', 'Uniswap'],
    },
    {
        url: 'https://medium.com/block-magnates/uniswap-v2-the-power-of-the-amm-e565bd3f3ac1',
        title: 'Uniswap V2: The Power of the AMM',
        description: (
            <p>
                Part 1 of an exploration into Uniswap, specifically focusing on
                the mechanics of how AMMs/DEXs work. Great introduction into
                DeFi and the benefits of DeFi for anyone new to the space.
            </p>
        ),
        date: 'May 2023',
        image: UNISWAPP1,
        tags: ['AMM', 'Web3', 'Uniswap'],
    },
    {
        url: 'https://medium.com/@lewis1broadhurst/erc20-what-why-5b300dff5aa6',
        title: 'ERC20: What & Why?',
        description: (
            <p>
                A dive into the history of ERC20 tokens, how they came into
                existence, what they acheive, and why they are an important
                standard in the crypto space.
            </p>
        ),
        date: 'May 2023',
        image: ERC20,
        tags: ['ERC20', 'Web3', 'ETH'],
    },
    {
        url: 'https://www.youtube.com/watch?v=ZZir6e-iG0g',
        title: 'Flexbox Tutorial',
        description: (
            <p>
                Still struggling to center that div? Flexbox to the rescue!
                Flexbox is a powerful model which simplifies website structure
                and is an essential component of modern CSS. In this tutorial I
                recreate a section of the IMBD website, solely focusing on
                flexbox.
            </p>
        ),
        date: 'Aug 2022',
        image: FLEXBOX,
        tags: ['Flexbox', 'CSS', 'UI'],
    },
    {
        url: 'https://www.youtube.com/watch?v=_I9V0rIOP_8',
        title: 'Tailwind CSS Tutorial',
        description: (
            <p>
                Tailwind is a utility first styling framework, allowing you confine your CSS to your HTML equivalent file (basically direct inline styling but a whole lot better). 
                In this 90min tutorial, I recreate a basic website from my coding bootcamp using HTML, Tailwind, and a little JS.
            </p>
        ),
        date: 'Aug 2022',
        image: TAILWIND,
        tags: ['Tailwind', 'CSS', 'UI'],
    },
]

const BlogView = () => {
    const contentToRender = publishedContentPreview.map(pc => (
        <ContentPreview
            key={pc.date}
            url={pc.url}
            title={pc.title}
            description={pc.description}
            image={pc.image}
            date={pc.date}
            tags={pc.tags}
        />
    ));

    const [leftColumn, rightColumn] = publishedContentPreview.reduce<[JSX.Element[], JSX.Element[]]>(
        (acc, pc, index) => {
            acc[index % 2].push(
                <ContentPreview
                    key={pc.date}
                    url={pc.url}
                    title={pc.title}
                    description={pc.description}
                    image={pc.image}
                    date={pc.date}
                    tags={pc.tags}
                />
            );
            return acc;
        },
        [[], []]
    );

    return <>
        <section className="grid gap-5 lg:hidden">{contentToRender}</section>
        <section className="hidden lg:grid lg:gap-5 lg:grid-cols-2">
            <section className='flex flex-col gap-5'>{leftColumn}</section>
            <section className='flex flex-col gap-5'>{rightColumn}</section>
        </section>
    </>;
}

export default BlogView
