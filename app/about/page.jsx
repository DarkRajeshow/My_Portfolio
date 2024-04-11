import AboutHero from '@/components/shared/AboutHero'
import Experience from '@/components/shared/Experience'
import Skills from '@/components/shared/Skills'
import React from 'react'
import Education from '@/components/shared/Education'

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
