import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <h3 className='hidden md:block text-center m-auto bg-dark/5 text-dark dark:text-light border-b border-dark/20 dark:border-light/20 dark:bg-light/5 w-full z-50 py-1.5 text-sm font-medium '>
            Hi, I am open to new collaboration opportunities. Know about <Link href={"/about"} className='font-bold underline underline-offset-4 text-blue-800 dark:text-blue-200'> me </Link> and <Link href="/projects" className='font-bold underline underline-offset-4 text-blue-800 dark:text-blue-200'>my work</Link>, here reach me via <Link href={"mailto:rajannaadeli@gmail.com"} className='font-bold underline underline-offset-4 text-blue-800 dark:text-blue-200'>mail</Link> or below socials.
        </h3>
    )
}

export default Header;  