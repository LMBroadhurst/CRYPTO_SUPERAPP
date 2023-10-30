import React from 'react'
import ContentPreview from '../global/Card'
import CODERCOMMERCE from './assets/CODERCOMMERCE.png'
import LEVELGROUND from './assets/LEVELGROUND.png'
import KENTCDODDS from './assets/KENTCDODDS.png'
import {CardContents} from '@/components/home/HomeTypes'

const contentToRender: CardContents[] = [
    {
        url: 'https://github.com/LMBroadhurst/kentcdodds_epic_react_course',
        title: 'Kent C Dodds - Epic React Course',
        description: (
            <p>
                As I have become fluent using React, I wanted to push myself to
                cover bases and knowledge gaps I may have missed along the way.
                I have been following Kent from my first JS conference, where he
                did a short talk on Remix. I knew Kent had an
                intermediate-advanced react course so I decided to check it out,
                since he kindly has open sourced the course materials.
                <br />
                <br />
                After going through the materials this guy knows React inside
                out! Massively helped me improve my understanding of the React
                fundamentals & 'how to think in React', given me new paradigms
                of how I should be coding in React, and gave me more exposure to
                testing with Jest, RTL, and MSW.
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
                party service integrations such as Firebase and Stripe. <br />
                <br />
                One thing I love about this website is that it gave me exposure
                to redux and useContext, including Authentication via firebase
                and having the `proper` Google sign in popups was pretty cool
                too. Looking back on this project, there are some major design
                issues that are hard to stomach now. e.g. Nearly all fonts are
                way too big, login/signup form especially.
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
                development I was following on YouTube at the time, and my
                recent venture into Kickboxing. I'd argue this is actually
                better looking UI wise than some of my later projects due it's
                simplicity.
            </p>
        ),
        date: 'April 2022',
        image: LEVELGROUND,
        tags: ['HTML', 'CSS', 'JS'],
    },
]

const Portfolio = () => {
    return (
        <section className="mb-32 lg:mb-0">
            <section className="flex flex-col gap-2 p-10 lg:p-0">
                <h2 className="text-2xl">Portfolio</h2>

                <section className="flex flex-col gap-5 text-slate-400 text-justify">
                    <p>
                        Welcome to my portfolio! Whilst not all of these are
                        projects per se, I thought it would be good to share
                        some of the courses and things I've been getting up to
                        outside of work 😄
                    </p>

                    {contentToRender.map(project => {
                        const {url, title, description, date, image, tags} =
                            project

                        return (
                            <ContentPreview
                                key={title}
                                date={date}
                                url={url}
                                tags={tags}
                                title={title}
                                image={image}
                                description={description}
                            />
                        )
                    })}
                </section>
            </section>
        </section>
    )
}

export default Portfolio
