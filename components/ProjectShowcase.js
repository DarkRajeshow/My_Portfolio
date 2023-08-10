"use client"
import React from 'react'
import AnimateText from './AnimateText'
import Image from 'next/image'
import { GithubIcon } from './Icon'
import Anime from '@/public/images/projects/anime.jpeg'
import cllimateClues from '@/public/images/projects/cllimateClues.jpeg'
import Calculator from '@/public/images/projects/calculator.jpeg'
import SnakeGame from '@/public/images/projects/snakeGame.jpeg'
import SimonGame from '@/public/images/projects/simonGame.jpeg'
import game_2048 from '@/public/images/projects/2048.jpeg'
import University from '@/public/images/projects/university.jpeg'

import { motion } from 'framer-motion'


const GridElementFeatured = ({ image, gitHub, title, description, websiteLink, featured = false, projectNo = "" }) => {

    const handleNavigateProject = () => {
        window.open(websiteLink, '_blank');
    }

    return (
        <>
            <div className={`${featured ? "items-center col-span-2 flex py-8 px-10" : "px-6 py-6"} border-dark border-2 rounded-[20px] justify-center items-center gap-4 relative bg-light dark:bg-dark dark:text-light dark:border-light`}>
                <div className={`${featured ? "w-[101%]" : "w-[103%]"} col-span-4 p-5 g-dark top-0 left-0 absolute -z-10 h-[103%] border-2 dark:bg-light bg-dark border-dark rounded-[35px] rounded-br-[25px] `} />
                <motion.div className={`items-center img overflow-hidden rounded-[5px] ${featured ? "" : "mb-5 h-[300px]"} border-dark border-[1px] dark:border-light`}
                    initial={{
                        y: 40,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 1
                        }
                    }}
                    viewport={{ once: true }}

                >
                    <Image src={image} onClick={handleNavigateProject} className='cursor-pointer hover:scale-[1.02] transition-all h-full w-full ' />
                </motion.div>


                <motion.div className="text-left"
                    initial={{
                        y: 40,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: "just",
                            duration: 1
                        }
                    }}
                    viewport={{ once: true }}

                >
                    <h3 className='text-primary font-bold text-xl'> {featured ? "Featured Project" : `Progress ${projectNo}`}</h3>
                    <h2 className='text-5xl font-bold'
                        initial={{
                            y: 40,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: {
                                type: "just",
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                    >{title}</h2>
                    <div className="content"

                    >
                        <p className='font-semibold text-lg py-5'>{description}</p>
                        <div className="links flex pb-5 items-center">
                            <a href={gitHub} target='_blank'><GithubIcon className={'w-[40px] text-light bg-dark border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light rounded-full'} /></a>
                            <a href={websiteLink} target='_blank'><button className='text-light text-xl bg-dark font-bold px-4 py-3 mx-4 rounded-lg hover:scale-[1.02] transition-all border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light'>Explore</button></a>
                        </div>
                    </div>
                </motion.div>
            </div >
        </>
    )
}
export default function ProjectShowcase() {
    return (
        <>
            <AnimateText className='text-8xl my-32 font-extrabold text-center shadow-purple' text="Want to see My work? Here it is." durationtime='1' />

            <div className="grid grid-cols-2 gap-20 pb-64">

                <GridElementFeatured image={Anime} websiteLink={"https://darkrajeshow.github.io/Otaku_An_Anime_Discovery/"} gitHub="https://github.com/DarkRajeshow/Otaku_A_Anime_Discover" title="Otaku: An Anime Discovery" description={"Discover your favorite anime on Otaku! Find recommendations based on genre, year, and age rating. Get detailed info and personalized suggestions. Try it now!"} featured={true} />

                <GridElementFeatured image={cllimateClues} websiteLink={"https://darkrajeshow.github.io/ClimateClues/"} gitHub="https://github.com/DarkRajeshow/ClimateClues" title="ClimateClues" description={"Get future forecasts, rain chances, current temperature, and humidity for any city. Stay informed and plan confidently with our powerful weather analysis tools."} featured={true} />

                <GridElementFeatured image={game_2048} websiteLink={"https://darkrajeshow.github.io/2048/"} gitHub="https://github.com/DarkRajeshow/2048" title="2048 Game" description={"Experience 2048-Game, with animations from the talented motion graphic designer, romaincousin! 🎮🎨 Discover the magic of merging numbers.🚀✨ 🚀🎮"} featured={true} />

                <GridElementFeatured image={Calculator} websiteLink={"https://darkrajeshow.github.io/My-Calculator-Version-2.0/"} gitHub="https://github.com/DarkRajeshow/My-Calculator-Version-2.0" title="Basic Calculator" description={"My website project showcases a unique and user-friendly calculator I crafted from scratch. With a delightful interface, it effortlessly handles arithmetic operations, square roots, and more! Say goodbye to complexity and embrace simplicity as you breeze through basic calculations. Let's simplify math together! 🚀💻"} projectNo="4" />

                <GridElementFeatured image={SnakeGame} websiteLink={"https://darkrajeshow.github.io/SnakeGunWater_Game/"} gitHub="https://github.com/DarkRajeshow/SnakeGunWater_Game" title="Snake Gun & Water Game" description={"Step into the world of Snake, Gun & Water! 🐍🔫💧 Test your luck against the computer in this thrilling game of chance. Choose your weapon wisely, and may fortune favor the bold! 🎲🌟 Will you emerge victorious? Play now and experience the excitement of this luck-driven adventure! 🚀🎮"} projectNo="3" />



                <GridElementFeatured image={SimonGame} websiteLink={"https://darkrajeshow.github.io/Simon-Game-Updated/"} gitHub="https://github.com/DarkRajeshow/Simon-Game-Updated" title="Simon Game" description={"Welcome to Simon, the ultimate memory challenge! 🕹️🧠 Test and enhance your memory skills with this captivating game. Follow the pattern, remember the sequence, and aim for the highest score! 🌟🏆 Experience the thrill of beating your own records and mastering the art of memory. Let the fun begin! 🚀"} projectNo="2" />

                <GridElementFeatured image={University} websiteLink={"https://darkrajeshow.github.io/University-Website/"} gitHub="https://github.com/DarkRajeshow/University-Website" title="University Landing Page" description={"Welcome to our virtual university! 🎓🏛️ Explore this landing page, a testament to my web development journey and progress. As a beginner, I designed this dummy university site with enthusiasm and dedication. Join us on this educational adventure and witness the evolution of my skills! 🚀💻"} projectNo="1" />


            </div>

        </>
    )
}
