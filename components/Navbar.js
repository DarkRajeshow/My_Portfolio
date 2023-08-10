"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../components/Logo'
import Customlink from '../components/Customlink'

import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from '../components/Icon'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import CustomLinkMobile from './CustomLinkMobile'



const MotionLink = motion(Link)

export default function Navbar() {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setisOpen] = useState(false);

    const iconMotionVariants = {
        animate: {
            opacity: [0, 1],
            transition: {
                type: "just",
                duration: 1
            }
        },
        hover: {
            y: -3,
            scale: 1.2,
            transition: {
                type: "spring",
                duration: 0.3
            }
        }
    }


    const handleClick = () => {
        setisOpen(!isOpen);
    }

    return (
        <header
            className='m-auto relative py-8 -mx-32 px-32 font-medium flex justify-between items-center border-t-dark dark:border-t-light dark:border-gray-800 border-4 dark:text-light dark:bg-dark bg-text text-dark '
        >

            <div className="lg:hidden">
                {/* menu Icon */}
                <div className="menu flex flex-col justify-center items-center cursor-pointer" onClick={handleClick}>
                    <span className={`h-1 bg-dark transition-all duration-300 ease-in-out dark:bg-light w-7 rounded-sm mb-1 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`h-1 bg-dark transition-all duration-300 ease-in-out dark:bg-light w-7 rounded-sm mb-1 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`h-1 bg-dark transition-all duration-300 ease-in-out dark:bg-light w-7 rounded-sm mb-1 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>

                {isOpen && <div className="flex flex-col min-w-[70vw] lg:hidden items-center justify-center fixed z-50  top-1/2 left-1/2 h-60 rounded-xl -translate-x-1/2 -translate-y-1/2 text-light dark:text-dark dark:bg-light/75 bg-dark/75 backdrop-blur-md py-32">
                    <nav className='flex flex-col py-10'>
                        
                        <CustomLinkMobile href={"/"} title="Home" hreflink={'/'} classname={'my-1'} toggleFunc={handleClick} />
                        <CustomLinkMobile href={"/about"} title="About" hreflink={'/about'} classname={'my-1' } toggleFunc={handleClick}/>
                        <CustomLinkMobile href={"/projects"} title="Projects" hreflink={'/projects'} classname={'my-1'} toggleFunc={handleClick}/>
                    </nav>

                    <nav className='flex justify-between items-center '>
                        <MotionLink href={"https://github.com/DarkRajeshow/"} target='_blank' className='mr-5 text-[26px]' variants={iconMotionVariants} animate="animate" whileHover="hover"><GithubIcon /></MotionLink>
                        <MotionLink href={"https://www.linkedin.com/in/rajesh-adeli-880a89259/"} target='_blank' className='mr-5 text-[26px]' variants={iconMotionVariants} animate="animate" whileHover="hover"><LinkedInIcon /></MotionLink>
                        <button onClick={() => { setMode(mode === "dark" ? "light" : "dark") }}>{mode === "dark" ? <SunIcon className={"fill-dark "} /> : <MoonIcon className={"fill-dark"} />}</button>
                    </nav>
                </div>}

            </div>

            <nav className='lg:block hidden'>
                <Customlink href={"/"} title="Home" hreflink={'/'} classname={'mx-4'} />
                <Customlink href={"/about"} title="About" hreflink={'/about'} classname={'mx-4'} />
                <Customlink href={"/projects"} title="Projects" hreflink={'/projects'} classname={'mx-4'} />
            </nav>

            <nav className='flex justify-between items-center'>
                <MotionLink href={"https://github.com/DarkRajeshow/"} target='_blank' className='mr-5 text-[26px]' variants={iconMotionVariants} animate="animate" whileHover="hover"><GithubIcon /></MotionLink>
                <MotionLink href={"https://www.linkedin.com/in/rajesh-adeli-880a89259/"} target='_blank' className='mr-5 text-[26px]' variants={iconMotionVariants} animate="animate" whileHover="hover"><LinkedInIcon /></MotionLink>
                <button onClick={() => { setMode(mode === "dark" ? "light" : "dark") }}>{mode === "dark" ? <SunIcon className={"fill-dark "} /> : <MoonIcon className={"fill-dark"} />}</button>
            </nav>

            <div className='absolute top-4 left-[50%] translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
