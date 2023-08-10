import AboutHero from '@/components/AboutHero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import React from 'react'
import Education from '@/components/Education'

export default function About() {
  return (
    <div className='text-dark dark:text-light dark:bg-dark relative -z-0'>
      <AboutHero />
      <Skills />
      <Education/>
      <Experience/>
    </div>
  )
}
