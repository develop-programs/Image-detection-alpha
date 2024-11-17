"use client";
import { insertData } from '@/redux/Reducers/AuthProvider.redux'
import { AppDispatch } from '@/redux/store'
import { useSession } from 'next-auth/react'
import { useDispatch } from 'react-redux'

export default function Auth() {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    if (session) {
        dispatch(insertData({
            id: session.user.id,
            name: session.user.name,
            email: session.user.email,
            isEmailVerified: session.user.isEmailVerified,
            createdAt: session.user.createdAt,
            updatedAt: session.user.updatedAt,
            image: session.user.image || ''
        }))
    }
    return null
}
