"use client"
import React, { useState } from 'react'
import Header from '@/components/global/Header'
import Navigation, { NavigationTabs } from '@/components/global/Navigation'
import AboutMeView from '@/components/home/AboutMeView'
import PortfolioView from '@/components/home/PortfolioView'
import ContentView from '@/components/home/ContentView'
import { CoffeeOutlined } from '@ant-design/icons'

export default function page() {

    const [activeTabKey, setActiveTabKey] = useState<string>(NavigationTabs.HOME)
    const handleTabChange = (e: any) => setActiveTabKey(e.target.id)

    return <main className="text-slate-50 bg-slate-900 flex flex-col pt-10 pb-20">
        <section className="flex flex-col gap-20 w-2/3 mx-auto">
            <section className="flex flex-row justify-between">
                <Header />
                <Navigation activeTabKey={activeTabKey} handleTabChange={handleTabChange} />
            </section>

            <section className="">
                {(activeTabKey === NavigationTabs.HOME && <AboutMeView />) ||
                    (activeTabKey === NavigationTabs.PORTFOLIO && (
                        <PortfolioView />
                    )) ||
                    (activeTabKey === NavigationTabs.BLOG && <ContentView />)}
            </section>
        </section>
    </main>
}
