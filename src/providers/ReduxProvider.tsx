"use client";
import { store } from '@/redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import React from 'react'

export default function ReduxClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider store={store}>{children}</ReduxProvider>
    )
}
