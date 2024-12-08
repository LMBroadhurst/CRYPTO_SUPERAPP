import React from 'react'
import ContentPreview from '../global/ContentPreview'
import CODERCOMMERCE from './assets/CODERCOMMERCE.png'
import LEVELGROUND from './assets/LEVELGROUND.png'
import KENTCDODDS from './assets/KENTCDODDS.png'
import PYTHONTRADINGBOT from './assets/PYTHONTRADINGBOT.jpg'
import FUNAT5 from './assets/FUNAT5.png'
import { CardContents } from '@/components/home/HomeTypes'

const contentToRender: CardContents[] = [
    {
        url: 'https://github.com/LMBroadhurst/algobot_statistical_finance_dashboard',
        title: 'Trading Bot with Python',
        description: (
            <p>
                Due to my interest in FX trading and engineering, I decided to
                spend some of my free time learning how to build algorithmic trading
                bots with python. Using the OANDA API, I was able to gain access to historical data to
                backtest typical retail trading strategies and run a trading bot.
            </p>
        ),
        date: 'Jan 2023',
        image: PYTHONTRADINGBOT,
        tags: ['Python', 'DSA', 'Pandas', 'Jupyter Notebooks'],
    },
    {
        url: 'https://funatfive.netlify.app/',
        title: 'Fun@5: 6 Week Hackathon',
        description: (
            <p>
                Tasked with building an app that would improve DEI in the workspace, I worked in a team of 3 to build
                an app that would allow colleagues to vote on ideas for social events. The app would then anonymously
                tally the results and choose the most popular option.
                <br />
                <br />
                Note only the frontend is hosted and is not connected to the server. The login/register
                functionality will not work.
            </p>
        ),
        date: 'Autumn 2022',
        image: FUNAT5,
        tags: ['React', 'JS/HTML/CSS', 'Tailwind'],
    },
    {
        url: 'https://github.com/LMBroadhurst/kentcdodds_epic_react_course',
        title: 'Kent C Dodds - Epic React Course',
        description: (
            <p>
                As I have become fluent using React, I wanted to push myself to
                cover bases and knowledge gaps I may have missed along the way.
            </p>
        ),
        date: 'Sep 2023',
        image: KENTCDODDS,
        tags: ['Adv. React Patterns', 'React Testing'],
    },
    {
        url: 'https://coder-commerce.netlify.app/',
        title: 'Coder Commerce',
        description: (
            <p>
                An E-Commerce site I built from scratch to learn more about 3rd
                party service integrations such as Firebase and Stripe, as well as try my hand at redux.
            </p>
        ),
        date: 'Sep 2022',
        image: CODERCOMMERCE,
        tags: ['React', 'Stripe', 'Redux', 'Firebase'],
    },
    {
        url: 'https://psuedo-level-ground.netlify.app/',
        title: 'Level Ground MMA',
        description: (
            <p>
                One of the first websites I built that I was proud enough to
                share. Super simple static web page inspired by a web
                development I was following on YouTube at the time.
            </p>
        ),
        date: 'April 2022',
        image: LEVELGROUND,
        tags: ['HTML', 'CSS', 'JS'],
    },
]

const Projects = () => {
    return (
        <section className="mb-32 lg:mb-0">
            <section className="flex flex-col gap-2 p-10 lg:p-0">
                <section className="grid grid-cols-2 gap-5 text-slate-400 text-justify">

                    {contentToRender.map(project => {
                        const { url, title, description, date, image, tags } = project
                        return <ContentPreview
                            key={title}
                            date={date}
                            url={url}
                            tags={tags}
                            title={title}
                            image={image}
                            description={description}
                        />
                    })}
                </section>
            </section>
        </section>
    )
}

export default Projects
