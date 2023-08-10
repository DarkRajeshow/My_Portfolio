import Image from "next/image";
import AnimateText from "./AnimateText";
import profile from '@/public/images/profile/developer-pic-2.jpg'
import Counter from "./Counter";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutHero() {
    return (
        <>
            <div className="about m-h-full w-full">
                <div className="heading py-12">
                    <AnimateText text={`Crafting the Future with code and Creativity!`} className="shadow-purple text-8xl font-bold text-center" durationtime="1" />
                </div>
                <div className="sections grid grid-cols-11 py-16 gap-20">
                    <div className="col-span-5 font-medium text-lg">
                        <h3 className="text-2xl uppercase text-yellow-500 font-bold">My Experties</h3>
                        <p className="mb-5 ">Hello! I'm Rajesh Adeli, a passionate full-stack developer specializing in front-end development with <strong className="dark:text-primaryDark">expertise</strong> in <strong className="dark:text-primaryDark">React, JavaScript, Tailwind CSS, Framer Motion, and Next.js</strong>. </p>

                        <p className="mb-5">With over <strong className="dark:text-primaryDark">a year of dedicated learning experience</strong>, I'm constantly moving forward to showcase my skills to the world by landing my first job.</p>

                        <p className="mb-5">Creating <strong className="dark:text-primaryDark">user-friendly UI designs</strong> with captivating animations and visuals is my forte. Currently <strong className="dark:text-primaryDark">pursuing a computer science degree</strong> in India, I'm in my 3rd year of BTech.</p>

                        <p className="mb-5"> I believe in the power of continuous growth and strive to make a positive impact through my work.</p>

                        <p> <strong className="dark:text-primaryDark">Thanks for reading</strong> – that's me in a nutshell!</p>
                    </div>

                    <div className="col-span-4 relative bg-light border-2 p-5 border-dark dark:border-light rounded-[20px] dark:bg-dark ">
                        <div className="col-span-4 p-5 bg-dark top-0 left-0 absolute -z-10 w-[103%] h-[103%] border-2 border-dark rounded-[30px] dark:bg-light " />
                        <Image src={profile} alt="Rajesh" className="w-full h-full rounded-[20px]"></Image>
                    </div>


                    <div className="col-span-2 flex flex-col items-end justify-around  h-full">
                        <div className="projects">
                            <Counter className="coute text-7xl font-bold flex flex-col  justify-center xl:items-center items-end" count={15}></Counter>
                            <p>projects completed</p>
                        </div>
                        <div className="experience">
                            <Counter className="coute text-7xl font-bold flex flex-col  justify-center xl:items-center items-end" count={1}></Counter>
                            <p>years of experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation />
        </>
    )
}
