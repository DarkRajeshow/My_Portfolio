"use client"
import React, { useRef } from 'react'
import AnimateText from './AnimateText'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'
import ScrollAnimation from './ScrollAnimation'



const EducationElement = ({ course, duration, collage, learnings }) => {

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
                <h1 className='text-3xl font-bold'>{course}</h1>
                <span className='text-base text-gray-600 dark:text-yellow-500 font-medium '>{duration} | {collage}</span>
                <p className='text-base font-medium'>{learnings}</p>
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
            <div className="">
                <AnimateText isWord={true} className="text-8xl font-bold shadow-red text-center pt-10 pb-32  " text={"E D U C A T I O N"}></AnimateText>
                <div className="relative mx-auto w-[80%]">

                    <motion.div className={`absolute top-0 left-9 origin-top bg-gray-300 rounded-lg w-[4px] h-full dark:bg-gray-700`}></motion.div>

                    <motion.div ref={animationRef} className={`absolute top-0 left-9 origin-top bg-dark dark:bg-primaryDark rounded-lg w-[4px] h-full`} style={{ scaleY: scrollYProgress }}></motion.div>

                    <ul className='w-full flex flex-col items-start justify-between ml-4 py-10' >
                        <EducationElement
                            course={"Diploma In Civil Engineering"}
                            duration={"2019-2022"} collage={"Government Polytechnic, Solapur"}
                            learnings={"A passionate programmer with a civil engineering background, I embarked on a journey studying civil engineering during my diploma. However, it was during my 3rd year that programming captivated me, leading me to discover my true passion for web development."}
                        />

                        <EducationElement
                            course={"B.Tech In Computer Science"}
                            duration={"2022-Present"} collage={"SVERI's Collage of Engineering, Pandharpur"}
                            learnings={"Transforming Dreams into Reality: Embracing my passion for computer science, I made the brave switch from civil engineering. On a relentless pursuit to seize my first opportunity and create a fulfilling future."}
                        />

                        <EducationElement
                            course={"Online Learning"}
                            duration={"2022-Present"} collage={"YouTube, Udemy etc"}
                            learnings={"After completing my diploma, I embarked on a journey to learn web development. The online world offers an ocean of affordable opportunities to explore and seize."}
                        />
                    </ul>
                </div>

                <ScrollAnimation/>
            </div>
        </>
    )
}
