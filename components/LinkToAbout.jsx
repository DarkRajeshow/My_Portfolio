import React from 'react'
import AnimateText from './AnimateText'
import Link from 'next/link'



const SpecialSkills = ({ skill }) => {
    return (
        <Link href={"/projects"} className=''>
            <div className='flex bg-green/25 items-center justify-center rounded-lg border-2 border-dashed border-green-600  dark:bg-green-600 transition-all ease-in-out hover:translate-y-[-5px] hover:sm:translate-y-[-7px] hover:md:translate-y-[-10px] hover:lg:translate-y-[-1rem] hover:rotate-3 font-bold bg-[rgba(80,255,175,.25)] h-40  cursor-pointer '>
                <span className='text-sm min-[400px]:text-base sm:text-lg lg:text-xl'>{skill}</span>
            </div>
        </Link>
    )
}
export default function LinkToAbout() {

    return (
        <>
            <AnimateText text={"E x p e r t i e s"} isWord={true} className='text-3xl sm:text-4xl md:text-5xl xl:text-[65px] text-center font-bold shadow-purple py-8 sm:py-10 md:py-16 lg:py-20' />
            <div className="About w-[90%] gap-4 sm:gap-6 md:gap-8 m-auto mb-60 grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3">
                <SpecialSkills skill={"React JS"} />
                <SpecialSkills skill={"Next JS"} />
                <SpecialSkills skill={"TailwindCSS"} />
                <SpecialSkills skill={"JavaScript"} />
                <SpecialSkills skill={"FramerMotion"} />
            </div>
        </>
    )
}
