import Hero from "@/components/Hero";
import LinkToAbout from "@/components/LinkToAbout";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="w-full min-h-full dark:text-light dark:bg-dark bg-text text-dark">
      <Hero />
      <ScrollAnimation />
      <LinkToAbout />
    </main>
  )
}
