"use client";
import { insertData } from '@/redux/Reducers/AuthProvider.redux'
import { AppDispatch } from '@/redux/store'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Auth() {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            dispatch(insertData({
                id: session.user.id,
                name: session.user.name ?? '',
                email: session.user.email ?? '',
                isEmailVerified: session.user.isEmailVerified ?? false,
                createdAt: session.user.createdAt?.toString() ?? new Date().toString(),
                updatedAt: session.user.updatedAt?.toString() ?? new Date().toString(),
                image: session.user.image ?? ''
            }))
        }
    }, [session, status, dispatch])

    return null
}