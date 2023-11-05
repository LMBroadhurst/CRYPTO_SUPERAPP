"use client"
import React, { useState } from 'react'
import Header from '@/components/global/Header'
import Navigation, { NavigationTabs } from '@/components/global/Navigation'
import Socials from '@/components/global/Socials'
import AboutMeView from '@/components/home/AboutMeView'
import { Content } from 'next/font/google'
import PortfolioView from '@/components/home/PortfolioView'
import ContentView from '@/components/home/ContentView'

export default function page() {

    const [activeTabKey, setActiveTabKey] = useState<string>(NavigationTabs.ABOUT_ME)
    const handleTabChange = (e: any) => setActiveTabKey(e.target.id)

    return <main className="text-slate-50 bg-slate-900 flex flex-col">
        <section className="flex flex-col mx-auto sm:w-3/4 lg:flex-row lg:w-[900px] lg:gap-8 lg:py-32 xl:w-[1150px]">
            <section className="flex flex-col justify-between p-10 py-32 lg:p-0 lg:w-1/2 lg:h-[700px] lg:sticky lg:top-20">
                <section className="flex flex-col gap-8 lg:gap-20">
                    <Header />

                    <Navigation
                        activeTabKey={activeTabKey}
                        handleTabChange={handleTabChange}
                    />

                    <div className="lg:hidden">
                        <Socials />
                    </div>
                </section>

                <div className="hidden lg:block">
                    <Socials />
                </div>
            </section>

            <section className="flex flex-col gap-32 lg:hidden">
                <AboutMeView />

                <ContentView />

                <PortfolioView />
            </section>

            <section className="hidden lg:flex lg:w-1/2">
                {(activeTabKey === NavigationTabs.ABOUT_ME && <AboutMeView />) ||
                    (activeTabKey === NavigationTabs.PORTFOLIO && (
                        <PortfolioView />
                    )) ||
                    (activeTabKey === NavigationTabs.CONTENT && <ContentView />)}
            </section>
        </section>
    </main>
}
