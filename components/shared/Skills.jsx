"use client"
import { animate, motion } from "framer-motion"
import AnimateText from "./AnimateText"
import ScrollAnimation from "./ScrollAnimation"


const Skill = ({ name, xA, yA, web }) => {
  return (
    <motion.div className={`absolute web flex justify-center ${web ? "p-8" : " p-2 sm:p-2 md:px-3 md:py-2 lg:px-4 lg:py-3"} items-center font-semibold sm:text-light sm:bg-dark sm:dark:text-dark sm:dark:bg-light text-dark bg-transparent dark:text-light dark:bg-transparent rounded-full boxShadow-3xl text-[10px] sm:text-[12px] md:text-sm lg:text-base`}
      whileHover={{
        scale: [1, 1.1],
      }}
      initial={{
        x: 0,
        y: 0
      }}
      whileInView={{
        x: `${xA}`,
        y: `${yA}`,
        transition: {
          type: "just",
          duration: 1
        }
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

export default function Skills({ web = false }) {
  return (
    <div>
      <AnimateText isWord={true} className="mb-20 font-bold shadow-purple text-center py-10" text={"S k i l l s"}></AnimateText>
      <div className="h-[50vw] sm:h-[60vw] md:h-[80vw] lg:h-screen flex m-auto bg-circularXs sm:bg-circularSm md:bg-circularMd lg:bg-circularLg xl:bg-circularLight dark:bg-circularDarkXs dark:sm:bg-circularDarkSm dark:md:bg-circularDarkMd dark:lg:bg-circularDarkLg dark:xl:bg-circularDark rounded-full justify-center relative items-center ">
        <Skill name="Web" xA="0vw" yA="0vw" web={true} />
        <Skill name="JavaScript" xA="-20vw" yA="0vw" />
        <Skill name="CSS" xA="-5vw" yA="-11vw" />
        <Skill name="HTML" xA="16vw" yA="-6vw" />
        <Skill name="Tailwind CSS" xA="-6vw" yA="11vw" />
        <Skill name="ReactJS" xA="-28vw" yA="-15vw" />
        <Skill name="Git & GitHub" xA="-38vw" yA="0vw" />
        <Skill name="Typescript" xA="25vw" yA="-17vw" />
        <Skill name="GSAP" xA="35vw" yA="-3vw" />
        <Skill name="Express" xA="0vw" yA="-23vw" />
        <Skill name="NodeJS" xA="-26vw" yA="16vw" />
        <Skill name="MongoDB" xA="5vw" yA="22vw" />
        <Skill name="NextJS" xA="30vw" yA="14vw" />
        <Skill name="Framer Motion" xA="16vw" yA="8vw" />
      </div>
      <ScrollAnimation />
    </div>
  )
}
