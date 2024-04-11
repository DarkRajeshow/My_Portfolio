"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Customlink({ title, hreflink, classname = "", isFooterLink = false }) {
    const pathname = usePathname();
    return (
        <>
            <Link href={hreflink} className={`relative group font-semibold ${classname} `}>
                {title}
                <span className={`h-[2px] ${pathname === hreflink ? 'w-full' : 'w-1'} inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-center ${isFooterLink ? "bg-light" : "dark:bg-light bg-dark"}`}>
                </span >
            </Link >
        </>
    )
}