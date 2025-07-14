import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const WelcomeMessage = async () => {
    const user = await currentUser()
    if (!user) {
        return <div>Error</div>
    }
    return (
        <div>
            <h1 className='text-4xl font-semibold bg-gradient-to-r from-green-600 to-orange-400 bg-clip-text text-transparent'>
                Welcome, {user?.firstName} {user?.lastName}</h1>
        </div>
    )
}

export default WelcomeMessage