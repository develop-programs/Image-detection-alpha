import SignInButton from '@/components/custom/auth/SignInButton'
import SignOutButton from '@/components/custom/auth/SignOutButton'
import { Options } from '@/providers/auth_provider'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {
  const session = await getServerSession(Options)
  console.log(session);
  return (
    <div className='h-screen grid place-content-center'>
      {
        session ? <>
          <SignOutButton />
        </> : <>
          <SignInButton /></>
      }
    </div>
  )
}
