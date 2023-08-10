"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function CustomLinkMobile({ title, hreflink, classname, toggleFunc }) {
    const Router = useRouter();
    const pathname = usePathname();
    
    const handleNavigation = () => { 
        toggleFunc()
        Router.push(hreflink);
    }

    return (
        <>
            <nav onClick={handleNavigation} className={`${classname} relative group font-semibold`}>
                {title}<span className={`h-[2px] dark:bg-dark bg-light ${pathname === hreflink ? 'w-full' : 'w-0'} inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-center`}>
                </span >
            </nav >
        </>
    )
}