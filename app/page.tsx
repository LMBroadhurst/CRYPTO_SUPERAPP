"use client"
import React, { useState } from 'react'
import Header from '@/components/global/Header'
import Navigation, { NavigationTabs } from '@/components/global/Navigation'
import AboutMeView from '@/components/home/Home'
import PortfolioView from '@/components/home/PortfolioView'
import ContentView from '@/components/home/ContentView'

export default function page() {

    const [activeTabKey, setActiveTabKey] = useState<string>(NavigationTabs.HOME)
    const handleTabChange = (e: any) => setActiveTabKey(e.target.id)

    return <main className="text-slate-50 bg-slate-950 flex flex-col pt-10 pb-20">
        <section className="flex flex-col gap-20 w-2/3 mx-auto">
            <section className="flex flex-row justify-between">
                <Header />
                <Navigation activeTabKey={activeTabKey} handleTabChange={handleTabChange} />
            </section>

            {
                (activeTabKey === NavigationTabs.HOME && <AboutMeView />) ||
                (activeTabKey === NavigationTabs.PORTFOLIO && <PortfolioView />) ||
                (activeTabKey === NavigationTabs.BLOG && <ContentView />)
            }
        </section>
    </main>
}
