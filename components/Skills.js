"use client"
import { animate, motion } from "framer-motion"
import AnimateText from "./AnimateText"
import ScrollAnimation from "./ScrollAnimation"


const Skill = ({ name, xA, yA, web }) => {
  return (
    <motion.div className={`absolute web flex justify-center ${web ? "p-8" : "px-4 py-3"} items-center text-base font-semibold text-light bg-dark dark:text-dark dark:bg-light rounded-full boxShadow-3xl`}
      whileHover={{
        scale: [1, 1.1],
      }}
      initial={{
        x: 0,
        y: 0
      }}
      whileInView={{
        x: `${xA}px`,
        y: `${yA}px`,
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
      <AnimateText isWord={true} className="text-8xl font-bold shadow-purple text-center py-10" text={"S k i l l s"}></AnimateText>
      <div className="h-screen w-full flex m-auto bg-circularLight dark:bg-circularDark rounded-full justify-center relative items-center ">
        <Skill name="Web" xA="0" yA="0" web={true} />
        <Skill name="JavaScript" xA="-250" yA="80" />
        <Skill name="CSS" xA="300" yA="0" />
        <Skill name="HTML" xA="80" yA="-170" />
        <Skill name="Tailwind CSS" xA="70" yA="165" />
        <Skill name="ReactJS" xA="-330" yA="300" />
        <Skill name="GitHub" xA="-480" yA="40" />
        <Skill name="Web Design" xA="350" yA="280" />
        <Skill name="Responsive Design" xA="280" yA="-250" />
        <Skill name="BootsStrap" xA="480" yA="0" />
        <Skill name="NodeJS" xA="-30" yA="-350" />
        <Skill name="MongoDB" xA="-300" yA="-250" />
        <Skill name="NextJS" xA="-200" yA="-120" />
      </div>
      <ScrollAnimation />
    </div>
  )
}
