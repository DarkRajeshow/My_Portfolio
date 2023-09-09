import Image from "next/image";
import AnimateText from "./AnimateText";
import profile from '@/public/images/profile/developer-pic-2.jpg'
import Counter from "./Counter";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutHero() {
    return (
        <>
            <div className="about m-h-full w-full py-2 mx-auto flex flex-col items-center justify-center  sm:py-0">
                <div className="heading py-12">
                    <AnimateText text="Crafting the Future with code and Creativity!" className="shadow-purple text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center" durationtime="1" />
                </div>
                <div className="dark:bg-texturedBgDark bg-texturedBg sections w-full pb-16 gap-10 xl:gap-20 relative px-3 py-6 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:p-20 rounded-br-[100px] sm:rounded-br-[150px] md:rounded-br-[200px] lg:rounded-br-[250px]">

                    {/* description */}
                    <div className="col-span-9 min-[400px]:col-span-full md:col-span-6 xl:col-span-5 font-medium text-sm md:text-lg xl:text-xl w-full order-2 md:order-1 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                        <h3 className="text-xl lg:text-2xl uppercase text-yellow-500 font-bold ">My Experties</h3>
                        <p className="mb-5">Hello! I am Rajesh Adeli formally known as Rajanna Adeli, a passionate full-stack developer specializing in front-end development with <strong className="dark:text-primaryDark">expertise</strong> in <strong className="dark:text-primaryDark">React, JavaScript, Tailwind CSS, Framer Motion, and Next.js</strong>. </p>

                        <p className="mb-5">With over <strong className="dark:text-primaryDark">a year of dedicated learning experience</strong>, I am constantly moving forward to showcase my skills to the world by landing my first job.</p>

                        <p className="mb-5">Creating <strong className="dark:text-primaryDark">user-friendly UI designs</strong> with captivating animations and visuals is my forte. Currently <strong className="dark:text-primaryDark">pursuing a computer science degree</strong> in India, I am in my 3rd year of BTech.</p>

                        <p className="mb-5">I believe in the <strong>power of continuous growth</strong> and strive to make a positive impact through my work.</p>

                        <p> <strong className="dark:text-primaryDark">Thanks for reading</strong> – that&apos;s me in a nutshell!</p>
                    </div>


                    {/* image
                    <div className="col-span-9 min-[500px]:col-span-full md:col-span-5 xl:col-span-4 relative bg-light border-2 p-5 border-dark dark:border-light rounded-[20px] text-center dark:bg-dark order-1 md:order-2 w-full h-full">
                        <div className="col-span-4 p-5 bg-dark top-0 left-0 absolute -z-10 w-[103%] h-[103%] border-2 border-dark rounded-[30px] dark:bg-light " />
                        <Image src={profile} alt="Rajesh" className="w-full h-full rounded-[20px]"></Image>
                    </div> */}


                    {/* numbers */}

                    <div className="items-center justify-around pt-20 xl:mt-0 flex">
                        <div className="projects text-center">
                            <Counter className="coute text-4xl md:text-7xl font-bold flex flex-col  justify-center xl:items-center " count={15}></Counter>
                            <p className="text-[12px] sm:text-sm">projects completed</p>
                        </div>
                        <div className="experience text-center">
                            <Counter className="coute text-4xl md:text-7xl font-bold flex flex-col  justify-center text-center" count={1}></Counter>
                            <p className="text-[12px] sm:text-sm">years of experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation />
        </>
    )
}
