import Hero from "@/components/shared/Hero";
import LinkToAbout from "@/components/shared/LovedSkills";
import ScrollAnimation from "@/components/shared/ScrollAnimation";

export default function Home() {
  return (
    <main className="w-full min-h-full dark:text-light dark:bg-dark bg-text text-dark">
      <Hero />
      <ScrollAnimation />
      <LinkToAbout />
    </main>
  )
}
