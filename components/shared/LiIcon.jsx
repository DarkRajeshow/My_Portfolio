import React from 'react'
import { motion, useScroll } from 'framer-motion'

export default function LiIcon({ refDe, className = ""}) {
    const { scrollYProgress } = useScroll({
        target: refDe,
        offset: ["center end", "center center"],
        layoutEffect: false
    })

    return (
        <figure className={`absolute left-0 stroke-dark z-20 ${className}`}>
            <svg className='-rotate-90 ' width="75" height="75" viewBox='0 0 100 100'>
                <circle cx="50" cy="50" r="20" className='dark:stroke-primaryDark stroke-primary fill-none' />
                <motion.circle cx="50" cy="50" r="20" className='stroke-dark dark:stroke-primaryDark fill-light stroke-[3px]'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="50" cy="50" r="10" className='stroke-primary dark:stroke-primaryDark fill-primary dark:fill-primaryDark animate-pulse' />
            </svg>
        </figure>
    )
}
