"use client"
import React from 'react'
import { motion } from 'framer-motion'
export default function AnimateText({ text, className = "", durationtime = "0.5", isWord = false }) {

    const quatVarient = {
        initial: {
            opacity: 1,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
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
        <motion.div className='inline-block w-full overflow-hidden'
            variants={quatVarient}
            initial="initial"
            whileInView="whileInView"
        >
            <h1 className={`capitalize ${className}`}>
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
        </motion.div>
    )
}
