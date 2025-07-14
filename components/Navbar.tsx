import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Logo from './Logo'

export default function Navbar() {
    return (
        <nav>
            <Logo />
            <div>
                <UserButton afterSignOutUrl='/' />
                <ThemeSwitcher />

            </div>
        </nav>
    )
}
