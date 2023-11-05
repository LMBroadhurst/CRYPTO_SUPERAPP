import { Metadata } from "next"
import { Inter } from 'next/font/google'
import React from "react"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Lewis Broadhurst',
    description: 'Portfolio of Lewis Broadhurst',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return <html lang="en">
        <body className={`text-slate-50 bg-slate-900 flex flex-col ${inter.className}`}>
            {children}
        </body>
    </html>
}