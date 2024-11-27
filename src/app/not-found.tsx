"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='h-screen overflow-hidden grid place-content-center'>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", duration: 1, stiffness: 160, damping: 10 }}
                className='text-center'
            >
                <h1 className='text-[10rem] font-black'>404</h1>
                <p className='text-2xl'>Page not found</p>
            </motion.div>
            <Link href={window.location.origin} passHref legacyBehavior>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileFocus={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 10 }}
                    className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:ring hover:ring-sky-600/40'
                >
                    Go back
                </motion.button>
            </Link>
        </div>
    )
}
