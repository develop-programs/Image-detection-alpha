import Image from 'next/image'
import React from 'react'
import { NavigationTabs } from './NavigationTabs'
import UserProfile from '../auth/UserProfile'
import Link from 'next/link'
import Credit from '../credit'

export default function DesktopNav() {
    return (
        <div className='w-full p-4 flex items-center justify-between cursor-default'>
            <div className='flex gap-12 items-center'>
                <Link href="/" className='flex items-center gap-4'>
                    <Image src='/logo.svg' width={100} height={100} alt='logo' className='size-8' />
                    <span className='text-2xl font-sans font-black'>Photocess</span>
                </Link>
                <NavigationTabs />
            </div>
            <div className='flex justify-center items-center gap-12'>
                <Credit />
                <UserProfile />
            </div>
        </div>
    )
}
