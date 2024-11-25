"use client";
import { AppDispatch } from '@/redux/store'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchUser } from '@/redux/Reducers/AuthProvider.redux';

export default function Auth() {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            dispatch(fetchUser(session.user.email))
        }
    }, [session, status, dispatch])

    return null
}