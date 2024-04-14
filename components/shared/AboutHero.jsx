import AnimateText from "./AnimateText";
import Counter from "./Counter";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutHero() {
    return (
        <>
            <div className="about m-h-full w-full py-2 mx-auto flex flex-col items-center justify-center  sm:py-0">
                <div className="heading py-6 sm:py-12 sm:w-[80%] m-auto">
                    <AnimateText text="Crafting the Future with code and Creativity!" className="shadow-purple !text-3xl min-[500px]:text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl xl:!text-8xl px-0.5 font-bold text-center" durationtime="1" />
                </div>
                <div className="dark:bg-texturedBgDark bg-texturedBg sections w-full pb-16 gap-10 xl:gap-20 relative px-4 py-6 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:p-20 rounded-br-[100px] sm:rounded-br-[150px] md:rounded-br-[200px] lg:rounded-br-[250px]">

                    {/* description */}
                    <div className="col-span-9 min-[400px]:col-span-full md:col-span-6 xl:col-span-5 font-medium text-xs sm:text-sm md:text-lg xl:text-xl w-full order-2 md:order-1 mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl text-dark dark:text-light my-4 font-bold ">Who am I?</h3>
                        <p className="mb-5">Hello! I am Rajesh Adeli formally known as Rajanna Adeli, a passionate full-stack developer specializing in front-end development with <span className="dark:text-primaryDark font-semibold">expertise</span> in <span className="dark:text-primaryDark font-semibold">React, JavaScript, Tailwind CSS, Framer Motion, and Next.js</span>. </p>

                        <p className="mb-5">With over <span className="dark:text-primaryDark font-semibold">a year of dedicated learning experience</span> and <span className="dark:text-primaryDark font-semibold">another year of freelancing</span>, I am constantly moving forward to showcase my skills to the world by landing my first job.</p>

                        <p className="mb-5">Creating <span className="dark:text-primaryDark font-semibold">user-friendly UI designs</span> with captivating animations and visuals is my forte. Currently <span className="dark:text-primaryDark font-semibold">pursuing a computer science degree</span> in India, I am in my 3rd year of BTech.</p>

                        <p className="mb-5">I believe in the <span className="dark:text-primaryDark font-semibold">power of continuous growth</span> and strive to make a positive impact through my work.</p>

                        <p> <span className="dark:text-primaryDark font-semibold">Thanks for reading</span> – that&apos;s me in a nutshell!</p>
                    </div>


                    {/* <div className="col-span-9 min-[500px]:col-span-full md:col-span-5 xl:col-span-4 relative bg-light border-2 p-5 border-dark dark:border-light rounded-[20px] text-center dark:bg-dark order-1 md:order-2 w-full h-full">
                        <div className="col-span-4 p-5 bg-dark top-0 left-0 absolute -z-10 w-[103%] h-[103%] border-2 border-dark rounded-[30px] dark:bg-light " />
                        <Image src={profile} alt="Rajesh" className="w-full h-full rounded-[20px]"></Image>
                    </div>  */}

                    <div className="items-center justify-around pt-6 sm:pt-10 md:pt-20 xl:mt-0 flex">
                        <div className="projects text-center">
                            <Counter className="coute text-3xl sm:text-4xl md:text-7xl font-bold flex flex-col  justify-center xl:items-center " count={15}></Counter>
                            <p className="text-[12px] sm:text-sm">projects completed</p>
                        </div>
                        <div className="experience text-center">
                            <Counter className="coute text-3xl sm:text-4xl md:text-7xl font-bold flex flex-col  justify-center text-center" count={2}></Counter>
                            <p className="text-[12px] sm:text-sm">years of experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollAnimation />
        </>
    )
}
