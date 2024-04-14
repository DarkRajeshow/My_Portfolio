"use client"
import React, { useEffect, useState } from 'react'
import AnimateText from './AnimateText'
import { motion } from 'framer-motion'
import { LinkArrow } from '@/components/shared/Icon'

export default function Hero() {
    const paraVariants = {
        initial: {
            opacity: 0,
            y: 80
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1,
            }
        }
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 500);
    }, []);

    return (
        <>
            <div className="bg-texturedBg dark:bg-texturedBgDark flex justify-center items-center h-[80vh] w-full rounded-br-[100px] md:rounded-br-[250px]">
                <div className="flex flex-col h-auto justify-center w-[80%] text-center"
                >
                    <AnimateText text={'Combining technology with artistry.'} className=' font-bold mb-5 xl:!text-6xl lg:!text-5xl  md:!text-5xl sm:!text-4xl !text-3xl dark:shadow-purple' durationtime='1' />

                    {!isMobile ?
                        <motion.p className='text-[12px] min-[460px]:text-sm md:text-base lg:text-lg font-medium '
                            variants={paraVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            I am <strong className='underline dark:text-primaryDark'>Rajesh Adeli</strong>, a front-end focused full-stack developer, I am dedicated to turning ideas into innovative web applications.🎨 Explore my latest projects, showcasing my expertise in React.js and web development.✨
                        </motion.p> :
                        <p className='text-[12px] min-[460px]:text-sm md:text-base lg:text-lg font-medium ' >
                            I am <strong className='underline dark:text-primaryDark'>Rajesh Adeli</strong>, a front-end focused full-stack developer, I am dedicated to turning ideas into innovative web applications.🎨 Explore my latest projects, showcasing my expertise in React.js and web development.✨
                        </p>}

                    <div className="buttons py-4 flex flex-row items-center m-auto w-auto">
                        {
                            !isMobile ?
                                <>
                                    <motion.a href={'https://drive.google.com/file/d/1y1l0FuJRHX8tufltOH8cM30c_X-Iy3Zr/view?usp=sharing'} target='_blank'
                                        variants={paraVariants}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        <button className="text-light bg-dark mr-3 rounded-lg px-2 sm:px-3 p-1.5 sm:p-2 md:p-3 text-sm sm:text-base md:text-xl font-semibold sm:font-bold flex border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light">Resume<span><LinkArrow className={"px-2 h-5 sm:h-6 inline-block "} /></span></button>
                                    </motion.a>

                                    <motion.a href="mailto:rajannaadeli@gmail.com"
                                        variants={paraVariants}
                                        initial="initial"
                                        whileInView="animate"
                                    >
                                        <button className="text-dark bg-light rounded-lg py-1.5 px-2 sm:p-2 md:p-3 text-sm sm:text-base md:text-xl font-bold border-2 hover:bg-dark dark:bg-dark dark:text-light hover:text-light border-dark dark:hover:bg-light dark:hover:text-dark dark:border-light">Email</button>
                                    </motion.a>
                                </>
                                :
                                <>
                                    <a href={'https://drive.google.com/file/d/1y1l0FuJRHX8tufltOH8cM30c_X-Iy3Zr/view?usp=sharing'} target='_blank'
                                    >
                                        <button className="text-light bg-dark mr-3 rounded-lg px-2 sm:px-3 p-1.5 sm:p-2 md:p-3 text-sm sm:text-base md:text-xl font-semibold sm:font-bold flex border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light">Resume<span><LinkArrow className={"px-2 h-5 sm:h-6 inline-block "} /></span></button>
                                    </a>

                                    <a href="mailto:rajannaadeli@gmail.com"
                                    >
                                        <button className="text-dark bg-light rounded-lg py-1.5 px-2 sm:p-2 md:p-3 text-sm sm:text-base md:text-xl font-bold border-2 hover:bg-dark dark:bg-dark dark:text-light hover:text-light border-dark dark:hover:bg-light dark:hover:text-dark dark:border-light">Email</button>
                                    </a>
                                </>

                        }
                    </div>

                </div>
            </div>

        </>
    )
}


// pt-6 sm:pt-12 md:pt-16 lg:pt-20 xl:py-20 