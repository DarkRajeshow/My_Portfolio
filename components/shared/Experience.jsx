"use client"
import React, { useRef } from 'react'
import AnimateText from './AnimateText'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'



const ExperienceElement = ({ position, company, companyLink, time, address, work }) => {

    const liRef = useRef(null);
    return (
        <li ref={liRef} className='w-[67%] mx-auto my-9 first:mt-0 last:mb-0 flex flex-col items-center justify-between'>
            <LiIcon refDe={liRef} />
            <motion.div className=''
                initial={{
                    y: 50,
                    opacity: 0.3
                }}
                whileInView={{
                    y: 0,
                    opacity: [0, 1],
                    transition: {
                        type: "just",
                        delay: 0.2,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}

            >
                <h1 className='text-3xl font-bold'>{position}&nbsp;<a href={companyLink} target='_blank' className='cursor-pointer text-primary dark:text-primaryDark'>{company}</a></h1>
                <span className='text-sm lg:text-base text-gray-600 dark:text-yellow-500 font-medium '>{time} | {address}</span>
                <p className='text-base font-medium'>{work}</p>
            </motion.div>
        </li>
    )
}

const ProjectExperience = ({ linkTitle, title, description }) => {

    const liRef = useRef(null);
    return (
        <li ref={liRef} className='w-[67%] mx-auto my-9 first:mt-0 last:mb-0 flex flex-col items-center justify-between'>
            <LiIcon refDe={liRef} className='scale-75 md:scale-100'/>
            <motion.div className=''
                initial={{
                    y: 30,
                    opacity: 0.3
                }}
                whileInView={{
                    y: 0,
                    opacity: [0, 1],
                    transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 0.5
                    }
                }}
                viewport={{ once: true }}

            >
                <h1 className='text-2xl sm:text-3xl font-semibold my-1 sm:font-bold'>{title}</h1>
                <p className='text-[12px] sm:text-sm md:text-base font-medium'>{description}</p>
                <Link href={"/projects"} className='cursor-pointer text-primary dark:text-primaryDark'><button className='text-light text-base sm:text-lg md:text-xl bg-dark font-semibold sm:font-bold px-3 py-2 sm:px-4 sm:py-3 my-4 rounded-lg hover:scale-[1.02] transition-all border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light'>{linkTitle}</button></Link>
                
            </motion.div>
        </li>
    )
}

export default function Experience() {
    const animationRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: animationRef,
        offset: ["start end", "center start"]
    });

    return (
        <>
            <div className="pb-64">
                <AnimateText isWord={true} className="font-bold text-center pt-32 sm:pt-10 pb-10 sm:pb-32 md:shadow-red hover:shadowNone transition-all" text={"E X P E R I E N C E"}></AnimateText>
                <div className="relative h-auto mx-auto w-full lg:w-[80%]">

                    <motion.div className={`absolute top-0 left-9 origin-top bg-gray-300 rounded-lg w-0.5 dark:bg-gray-700 h-full`}></motion.div>

                    <motion.div ref={animationRef} className={`absolute top-0 left-9 origin-top bg-dark dark:bg-primaryDark rounded-lg w-0.5 h-full`} style={{ scaleY: scrollYProgress }}></motion.div>

                    <ul className='w-full flex flex-col items-start justify-between ml-4' >
                        <ProjectExperience
                            title={"Projects"}
                            linkTitle={"Checkout"}
                            description={"Although I lack actual corporate experience, I have completed several freelancing and personal projects that can be considered as valuable experience. Take a look at some of my projects to see my experience level."}
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}
