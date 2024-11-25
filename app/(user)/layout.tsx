import React, { ReactNode } from 'react'
import Navbar from '../components/navbar/Navbar'
import { TopNav } from '../components/navbar/TopNav'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='grid grid-cols-12' >
            <nav className='col-span-3 xl:col-span-2'>
                <Navbar />
            </nav>
            <main className='col-span-9 xl:col-span-10'>
                <TopNav />
                {children}
            </main>
        </div>
    )
}

export default layout