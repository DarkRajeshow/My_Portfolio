"use client"
import Image from 'next/image'
import React from 'react'
import profile from '@/public/images/profile/hero.png'
import AnimateText from './AnimateText'
import { motion } from 'framer-motion'
import { LinkArrow } from '@/components/Icon'

export default function Hero() {
    const imageVarients = {
        initial: {
            x: "-15%",
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1,

            }
        }

    }
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
    return (
        <>
            <div className="grid lg:grid-cols-2 xl:py-0 py-20 ">
                <motion.div
                    variants={imageVarients}
                    initial="initial"
                    whileInView="animate"
                    className='p-10'
                >
                    <Image src={profile} alt='profile' className='rounded-[10px]' />
                </motion.div>

                <div className="text-greeen-500 flex flex-col h-full justify-center"
                >
                    <AnimateText text={'Turning Vision Into Reality With Code And Design!'} className=' font-bold mb-5 text-3xl lg:text-5xl xl:text-6xl md:text-5xl sm:text-4xl shadow-purple ' durationtime='1' />

                    <motion.p className='text-sm md:text-base lg:text-lg font-medium '
                        variants={paraVariants}
                        initial="initial"
                        whileInView="animate"
                    >
                        I am <strong className='underline dark:text-primaryDark'>Rajesh Adeli</strong> a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.🎨 Explore my latest projects, showcasing my expertise in React.js and web development.✨
                    </motion.p>

                    <div className="buttons text-left py-4 flex flex-row"

                    >
                        <motion.a href={'/dummy.pdf'} target='_blank'
                            variants={paraVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            <button className="text-light bg-dark mr-3 rounded-lg p-2 md:p-3 text-md md:text-xl font-bold flex border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light">Resume <span><LinkArrow className={"px-2 h-6 inline-block "} /></span></button>
                        </motion.a>

                        <motion.a href="mailto:rajannaadeli@gmail.com"
                            variants={paraVariants}
                            initial="initial"
                            whileInView="animate"
                        >
                            <button className="text-dark bg-light rounded-lg p-2 md:p-3 text-md md:text-xl font-bold border-2 hover:bg-dark dark:bg-dark dark:text-light hover:text-light border-dark dark:hover:bg-light dark:hover:text-dark dark:border-light">Contact</button>
                        </motion.a>
                    </div>

                </div>
            </div>

        </>
    )
}
