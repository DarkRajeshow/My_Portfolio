
"use client"
import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icon'
import Customlink from './Customlink'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'


export default function Footer() {
    const MotionLink = motion(Link);

    const [mode, setMode] = useThemeSwitcher();

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

    return (
        <div className="flex justify-between py-6 sm:py-10 md:py-16 border-t-2 border-light text-light bg-dark dark:bg-light/10  -mx-32 px-36 sm:px-32">
            <div className="logowithtext flex">
                <div className="logo mr-5 flex items-center">
                    <Logo classname="sm:!h-28 sm:!w-28 sm:!text-4xl" />
                </div>
                <div className="contacttext flex flex-col font-medium text-xs min-[400px]:text-sm sm:text-base justify-center">
                    <h1 className='hidden sm:block'>✨ Want to connect? here is my contact details.</h1>
                    <p >Email: <a href={"mailto:rajannaadeli@gmail.com"} className='font-semibold sm:font-bold'>rajannaadeli@gmail.com</a></p>
                    <p>Phone: <span className='font-semibold sm:font-bold'>+91 9359379618</span></p>
                </div>
            </div>
            <div className="logowithtext w-[250px] justify-between items-center hidden md:flex">
                <div className="flex flex-col mr-5 ">
                    <Customlink href={"/"} title="Home" hreflink={'/'} classname={'mx-4 mb-2'} isFooterLink={true} />
                    <Customlink href={"/about"} title="About" hreflink={'/about'} classname={'mx-4 mb-2'} isFooterLink={true} />
                    <Customlink href={"/projects"} title="Projects" hreflink={'/projects'} classname={'mx-4 mb-2'} isFooterLink={true}/>
                </div>
                <div className="flex justify- flex-col font-medium text-md items-center">
                    <MotionLink href={"https://github.com/DarkRajeshow/"} target='_blank' className=' text-[26px] mb-3' variants={iconMotionVariants} animate="animate" whileHover="hover"><GithubIcon /></MotionLink>
                    <MotionLink href={"https://www.linkedin.com/in/rajesh-adeli-880a89259/"} target='_blank' className='text-[26px] mb-3' variants={iconMotionVariants} animate="animate" whileHover="hover"><LinkedInIcon /></MotionLink>
                    <button onClick={() => { setMode(mode === "dark" ? "light" : "dark") }}>{mode === "dark" ? <SunIcon className={"fill-dark "} /> : <MoonIcon className={"fill-dark"} />}</button>
                </div>
            </div>
        </div>
    )
}
