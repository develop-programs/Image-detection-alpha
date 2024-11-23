import DesktopNav from '@/components/custom/Navbar/DesktopNav'
import React from 'react'
import FloatingActionButton from "@/components/custom/Support/FloatingActionButton";

export default function layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <DesktopNav/>
            {children}
            <FloatingActionButton/>
        </div>
    )
}
