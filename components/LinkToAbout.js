import React from 'react'
import AnimateText from './AnimateText'
import Link from 'next/link'



const SpecialSkills = ({ skill }) => {
    return (
        <Link href={"/projects"} className='pb-10'>
            <div className='flex bg-green/25 mx-2 items-center justify-center rounded-lg border-2 border-dashed border-green-600 dark:bg-green-600 transition-all ease-in-out hover:translate-y-[-1rem] hover:rotate-3 dark:border-transparent font-bold bg-[rgba(80,255,175,.25)] h-40 px-10 cursor-pointer '>
                <span className='text-xl '>{skill}</span>
            </div>
        </Link>
    )
}
export default function LinkToAbout() {

    return (
        <>
            <Link href={"/about"}>
                <AnimateText text={"E x p e r t i e s"} isWord={true} className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-center font-bold shadow-purple py-20' />
            </Link>
            <div className="About w-[90%] m-auto mb-60 grid sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3">
                <SpecialSkills skill={"React JS"} />
                <SpecialSkills skill={"Next JS"} />
                <SpecialSkills skill={"TailwindCSS"} />
                <SpecialSkills skill={"JavaScript"} />
                <SpecialSkills skill={"FramerMotion"} />
            </div>
        </>
    )
}
