"use client"
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton(
    { children, className }: {
        children?: React.ReactNode,
        className?: string
    }
) {
    return (
        <Button variant="ghost" onClick={() => {
            signOut()
        }} className={className}>
            {children}
        </Button>
    )
}
