"use client"
import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

export default function ScrollAnimation() {

    const Refference = useRef();
    const { scrollYProgress } = useScroll({
        target: Refference,
        offset: ["start end", "end end"]
    });

    return (
        <div>
            <motion.div
                ref={Refference}
                className='pt-40'
                animate={{
                    transition: {
                        duration: 0.3
                    }
                }}
            >
                <motion.div className='relative h-1 bg-dark dark:bg-primaryDark w-[20%] m-auto my-20 rounded-full z-[1]'
                    style={{ scaleX: scrollYProgress }} />
                <motion.div className='h-1 dark:bg-gray-600 bg-gray-400 dark:z-0 w-[20%] m-auto my-20 rounded-full relative -top-[84px] -z-10' />
                <LiIcon refDe={Refference} className={"-rotate-90 relative w-0 left-1/2 translate-x-1/2 -top-[176px] sm:-top-[167px] scale-75 sm:scale-100"} />
            </motion.div>
        </div>
    )
}
