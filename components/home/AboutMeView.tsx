import React from 'react'
import MahiMarkets from './Experience/MahiMarketsCard'
import BNTA from './Experience/BNTACard'

const AboutMe = () => {
  return (
    <section className="flex p-10 lg:p-0 lg:w-full">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl self-start">About Me</h2>

        <section className="flex flex-col gap-5 text-slate-500 text-justify">
          <p>
            I’ve{' '}
            <span className="text-slate-200">
              always loved building and experimenting
            </span>{' '}
            with anything I can get my hands on, which is why I transitioned
            into being a software developer. As I have matured as a developer, I
            have gained a strong desire to{' '}
            <span className="text-slate-200">build with a purpose</span> so I
            can positively impact people and businesses.
          </p>

          <p>
            I’m constantly aiming to achieve this by following a feature and
            user driven mindset;{' '}
            <span className="text-slate-200">
              contributing to useful, well designed, and user orientated
              products daily is my ikigai.
            </span>
          </p>
        </section>

        <section className="pt-6 flex flex-col gap-6">
          <h2 className="text-2xl self-start -mb-2">Experience</h2>

          <MahiMarkets />

          <BNTA />
        </section>
      </section>
    </section>
  )
}

export default AboutMe
