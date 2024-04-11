"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ className, count = 10 }) {
    const inputRef = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(inputRef);

    useEffect(() => {
        if (isInView) {
            motionValue.set(count)
        }
    }, [isInView, count, motionValue])


    useEffect(() => {
        springValue.on("change", (latest) => {
            if (inputRef.current && latest.toFixed(0) <= count) {
                inputRef.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, count])


    return (
        <>
            <div className={`${className}`}>
                <span className='inline'><span ref={inputRef} >0</span>+</span>
            </div>
        </>
    )
}