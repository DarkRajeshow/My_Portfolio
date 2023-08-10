"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Customlink({ title, hreflink, classname }) {
    const pathname = usePathname();
    return (
        <>
            <Link href={hreflink} className={`${classname} relative group font-semibold`}>
                {title}<span className={`h-[2px] dark:bg-light bg-dark ${pathname === hreflink ? 'w-full' : 'w-0'} inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-center`}>
                </span >
            </Link >
        </>
    )
}