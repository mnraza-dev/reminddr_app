import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'

export default function Navbar() {
    return (
        <nav className='sticky top-0 left-0 z-50 backdrop-blur-2xl flex w-full items-center justify-between p-4 px-8 h-[60px] '>
            <Logo />
            <div className='flex gap-4 items-center'>
                <UserButton afterSignOutUrl='/' />
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
