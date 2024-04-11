"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link);

export default function Logo({ classname = "" }) {
    return (
        <div className="flex item-center justfy-center ">
            <MotionLink className={`h-[52px] w-[52px] text-xl md:h-16 md:w-16 md:text-2xl text-light border-2 dark:border-light bg-dark rounded-full flex items-center justify-center font-bold  ${classname} `} href='/'
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: {
                        duration: 1,
                        repeat: Infinity
                    }
                }}
            >
                RA
            </MotionLink>
        </div>
    )
}
