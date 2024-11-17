import Image from 'next/image'
import React from 'react'
import { NavigationTabs } from './NavigationTabs'
import UserProfile from '../auth/UserProfile'

export default function DesktopNav() {
    return (
        <div className='w-full p-4 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src='/logo.svg' width={100} height={100} alt='logo' className='size-8' />
                <span className='text-2xl font-sans font-black'>Photocess</span>
            </div>
            <NavigationTabs />
            <div>
                <UserProfile />
            </div>
        </div>
    )
}
