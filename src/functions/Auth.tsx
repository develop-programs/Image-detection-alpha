import { useSession } from 'next-auth/react'
import React from 'react'

export default function Auth() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div>
                <h1>Authenticated</h1>
                <p>{session?.user?.email}</p>
            </div>
        )
    }
}
