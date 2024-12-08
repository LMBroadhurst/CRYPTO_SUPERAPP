"use client"
import React, { useState } from 'react'
import Header from '@/components/global/Header'
import Navigation, { NavigationTabs } from '@/components/global/Navigation'
import HomeView from '@/components/home/HomeView'
import ProjectView from '@/components/projects/ProjectsView'
import BlogView from '@/components/blog/BlogView'

export default function page() {

    const [activeTabKey, setActiveTabKey] = useState<string>(NavigationTabs.HOME)
    const handleTabChange = (e: any) => setActiveTabKey(e.target.id)

    return <main className="text-slate-50 bg-slate-950 flex flex-col pt-10 pb-20">
        <section className="flex flex-col gap-8 mx-auto max-w-[1000px] w-4/5 lg:gap-10 lg:w-2/3">
            <section className="flex flex-col gap-2 lg:justify-between lg:flex-row">
                <Header />
                <Navigation activeTabKey={activeTabKey} handleTabChange={handleTabChange} />
            </section>
            {
                (activeTabKey === NavigationTabs.HOME && <HomeView />) ||
                (activeTabKey === NavigationTabs.BLOG && <BlogView />) ||
                (activeTabKey === NavigationTabs.PROJECTS && <ProjectView />)
            }
        </section>
    </main>
}
