import React from 'react'
import Link from 'next/link'

function Header() {
    return (
        <h3 className='text-center m-auto bg-dark text-light  dark:bg-light/5 w-full z-50 py-1.5 text-sm font-medium '>
            Hi, I am open to new collaboration opportunities. Know about <Link href={"/projects"} className='font-bold underline underline-offset-4 text-blue-200'>me and my work</Link> here and reach me via <Link href={"mailto:rajannaadeli@gmail.com"} className='font-bold underline underline-offset-4 text-blue-200'>mail</Link> or below socials.
        </h3>
    )
}

export default Header