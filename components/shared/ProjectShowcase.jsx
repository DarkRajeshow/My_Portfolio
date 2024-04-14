"use client"
import React from 'react'
import AnimateText from './AnimateText'
import Image from 'next/image'

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from '../ui/3d-card-effect'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { skills, projects } from '@/constants'
import { GithubIcon } from './Icon'
import { BackgroundGradient } from '../ui/background-gradient';


// const Project = ({ image, gitHub, title, description, websiteLink, featured = false, projectNo = "", technologyUsed = ['JavaScript'] }) => {

//     const handleNavigateProject = () => {
//         window.open(websiteLink, '_blank');
//     }

//     return (
//         <>
//             <div className={`${featured ? "items-center col-span-2 flex flex-col xl:flex-row p-3 md:py-8 md:px-10" : "col-span-2 lg:col-span-1 p-3 md:px-6 md:py-6"} border-dark border-2 rounded-[20px] justify-center items-center gap-4 relative bg-light dark:bg-dark dark:text-light dark:border-light`}>
//                 <div className={`${featured ? "w-[101%]" : "w-[101%] lg:w-[103%]"} col-span-4 p-5 g-dark top-0 left-0 absolute -z-10 h-[103%] border-2 dark:bg-light bg-dark border-dark rounded-[35px] rounded-br-[25px] `} />
//                 <motion.div className={`items-center img overflow-hidden rounded-[5px] ${featured ? "" : "mb-5 h-auto lg:h-[300px]"} border-dark border-[1px] dark:border-light`}
//                     initial={{
//                         y: 40,
//                         opacity: 0
//                     }}
//                     whileInView={{
//                         y: 0,
//                         opacity: 1,
//                         transition: {
//                             type: "just",
//                             duration: 1
//                         }
//                     }}
//                     viewport={{ once: true }}

//                 >
//                     <Image src={image} onClick={handleNavigateProject} className='cursor-pointer hover:scale-[1.02] transition-all h-full w-full' alt='Project_Tumbnail' />
//                 </motion.div>


//                 <motion.div className="text-left"
//                     initial={{
//                         y: 40,
//                         opacity: 0
//                     }}
//                     whileInView={{
//                         y: 0,
//                         opacity: 1,
//                         transition: {
//                             type: "just",
//                             duration: 1
//                         }
//                     }}
//                     viewport={{ once: true }}

//                 >
//                     <h3 className='text-primary dark:text-primaryDark font-bold text-base sm:text-lg md:text-xl'> {featured ? "Featured Project" : `Progress ${projectNo}`}</h3>
//                     <h2 className='text-2xl sm:text-3xl md:text-5xl font-bold'
//                         initial={{
//                             y: 40,
//                             opacity: 0
//                         }}
//                         whileInView={{
//                             y: 0,
//                             opacity: 1,
//                             transition: {
//                                 type: "just",
//                                 duration: 1
//                             }
//                         }}
//                         viewport={{ once: true }}
//                     >{title}</h2>
//                     <div className="content"

//                     >
//                         <p className='font-semibold text-sm sm:text-base md:text-lg py-2 md:py-3'>{description}</p>

//                         <div className='text-primary dark:text-primaryDark text-base font-bold pb-4 flex items-center'>
//                             <FaCogs className='text-dark dark:text-light' />
//                             {technologyUsed.map((tech, index) => {
//                                 return (
//                                     <p className='pl-1 ml-1 border-l-2 border-dark dark:border-light' key={index}>{tech}</p>
//                                 )
//                             })}</div>
//                         <div className="links flex pb-5 items-center">
//                             <a href={gitHub} target='_blank'><GithubIcon className={'!w-[30px] md:!w-[40px] text-light bg-dark border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light rounded-full'} /></a>
//                             <a href={websiteLink} target='_blank'><button className='text-[12px] sm:text-sm md:text-xl text-light bg-dark font-bold py-1 px-2 md:px-4 md:py-3 mx-4 rounded-lg hover:scale-[1.02] transition-all border-2 hover:bg-light dark:bg-light dark:text-dark hover:text-dark border-dark dark:hover:bg-dark dark:hover:text-light dark:border-light'>Explore</button></a>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div >
//         </>
//     )
// }

const Project = ({ image, gitHub, title, description, websiteLink, featured = false, technologyUsed, features, impacts }) => {
    const technologies = skills.filter((skill) => technologyUsed.indexOf(skill.name) > -1);
    return (
        <CardContainer className="w-full">
            <CardBody className="bg-texturedBg dark:bg-texturedBgDark relative group/card shadow-[0_0_4px_4px] shadow-zinc-200 dark:shadow-zinc-800 dark:border-light h-auto rounded-2xl p-4 sm:p-8 md:p-10 border sm:border-2 w-full border-dark my-0 font-medium">
                <CardItem
                    translateZ="30"
                    as='p'
                    className='sm:font-semibold text-sm sm:text-base text-green-900 dark:text-green-300'>

                    {featured ? "Featured Project." : "Progress Project."}
                </CardItem>

                <CardItem
                    translateZ="50"
                    as='p'
                    className=' font-semibold sm:font-bold text-2xl sm:text-3xl md:text-4xl my-1 text-dark dark:text-light'>
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="30"
                    className="my-2 text-sm sm:text-base dark:text-zinc-200 text-dark/80"
                >
                    {description}
                </CardItem>
                <CardItem
                    as="div"
                    translateZ="40"
                    className="my-2 dark:text-zinc-200 text-dark/80"
                >
                    <h3 className='text-green-900 text-sm sm:text-base sm:font-semibold dark:text-green-300 '>Features</h3>
                    <ul>{features.map((feature, index) => (
                        <li key={index} className='list-none flex gap-1.5 items-center text-xs sm:text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='lucide lucide-circle-check h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-700 dark:text-green-300' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            {feature}
                        </li>
                    ))}
                    </ul >
                </CardItem>
                {impacts && <CardItem
                    as="div"
                    translateZ="50"
                    className="my-2 dark:text-zinc-200 text-dark/80"
                >
                    <h3 className='text-red-700 sm:font-semibold text-sm sm:text-base dark:text-red-300 '>Impacts</h3>
                    <ul>{impacts.map((feature, index) => (
                        <li key={index} className='list-none flex gap-1.5 text-xs sm:text-sm'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-3 w-3 mt-1 text-blue-800 dark:text-blue-400' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" /></svg>
                            {feature}
                        </li>
                    ))}
                    </ul >
                </CardItem>
                }
                <CardItem
                    as="div"
                    translateZ="60"
                    className={"my-4"}
                >
                    <AnimatedTooltip items={technologies} />
                </CardItem>
                <CardItem translateZ="60" className="w-full mt-4">
                    <Link target='_blank' href={websiteLink}>
                        <Image
                            src={image}
                            className="w-full border border-dark dark:border-light object-cover rounded-md group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </Link>
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={websiteLink}
                        target="__blank"
                        className="px-4 py-2 font-medium rounded-xl text-xs sm:text-sm text-blue-800 dark:text-blue-200"
                    >
                        Visit site →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={gitHub}
                        target="__blank"
                        className="px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm sm:font-semibold flex gap-2 items-center justify-center"
                    >
                        GitHub {<GithubIcon className={'w-6 h-6'} />}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer >
    )
}
export default function ProjectShowcase() {
    return (
        <div className='px-4'>
            <AnimateText className='my-10 md:my-16 lg:my-24 font-bold text-center px-5' text="Welcome! Curious about My Creations? Dive In..." durationtime='1' />

            <div className="title">
                <h1 className='text-xl sm:text-2xl font-semibold tracking-widest'>Featured Projects</h1>
                <p className='text-xs sm:text-sm my-1 dark:text-gray-200 text-gray-600'>Peak Performance, My Top Projects.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 pb-24 sm:pb-32 md:pb-64">
                {projects.slice(0, 6).map((project, index) => (
                    <Project key={index} image={project.image} websiteLink={project.websiteLink} features={project.features} gitHub={project.gitHub} technologyUsed={project.technologyUsed} title={project.title} impacts={project?.impacts} description={project.description} featured={project.featured} />
                ))}
            </div>

            <div className="title">
                <h1 className='text-xl sm:text-2xl font-semibold tracking-widest'>Progress Projects</h1>
                <p className='text-xs sm:text-sm my-1 dark:text-gray-200 text-gray-600'>Learning Labs: Projects That Shaped My Skills.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 pb-20 sm:pb-32 md:pb-64">
                {projects.slice(6, 10).map((project, index) => (
                    <Project key={index} image={project.image} websiteLink={project.websiteLink} features={project.features} gitHub={project.gitHub} technologyUsed={project.technologyUsed} title={project.title} impacts={project?.impacts} description={project.description} featured={project.featured} />
                ))}
            </div>

        </div>
    )
}
