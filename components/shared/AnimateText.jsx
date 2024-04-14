"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

export default function AnimateText({ text, className = "", durationtime = "0.5", isWord = false }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 500);
        console.log(window.innerWidth < 500);
    }, []);

    const [mode, setMode] = useThemeSwitcher();

    const quatVarient = {
        initial: {
            opacity: 1,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.1
            }
        }
    }

    const wordVariant = {
        initial: {
            opacity: 0,
            y: 80
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                duration: durationtime,
            }
        }
    }


    return (
        <>
            {!isMobile ? <motion.div className='inline-block w-full overflow-hidden'
                variants={quatVarient}
                initial="initial"
                whileInView="whileInView"
            >
                <h1 className={`capitalize shadow-purple ${mode === "dark" ? "shadow-purple" : "shadow-noneS"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${className}`}>
                    {
                        text.split(" ").map((word, index) => {
                            return <motion.span
                                variants={wordVariant}
                                key={index} className='inline-block'>
                                {word}{!isWord ? <span>&nbsp;</span> : ""}
                            </motion.span>
                        })
                    }
                </h1>
            </motion.div > :
                <div className='inline-block w-full overflow-hidden'>
                    <h1 className={`capitalize ${mode === "dark" ? "shadow-purple" : "shadow-noneS"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${className}`}>
                        {isWord ? text.split(" ").join("") : text}
                    </h1>
                </div >
            }
        </>
    )
}
