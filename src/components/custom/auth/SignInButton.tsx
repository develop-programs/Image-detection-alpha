"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import React from 'react'

export default function SignInButton() {
    return (
        <div>
            <Button onClick={() => {
                signIn()
            }}>
                Sign In
            </Button>
        </div>
    )
}