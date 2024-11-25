"use client"
import { Button } from '@/components/ui/button'
import { resetData } from '@/redux/Reducers/AuthProvider.redux'
import { AppDispatch } from '@/redux/store'
import { signOut } from 'next-auth/react'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function SignOutButton(
    { children, className }: {
        children?: React.ReactNode,
        className?: string
    }
) {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <Button variant="ghost" onClick={() => {
            signOut()
            dispatch(resetData())
        }} className={className}>
            {children}
        </Button>
    )
}
