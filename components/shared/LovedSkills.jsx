import React from 'react'
import AnimateText from './AnimateText'
import { HoverEffect } from '../ui/card-hover-effect'
import { lovedSkills } from '@/constants'



export default function LinkToAbout() {

    return (
        <>
            <AnimateText text={"My Top Skills"} durationtime={1} className='text-3xl sm:text-4xl md:text-5xl xl:text-[65px] text-center font-bold shadow-purple py-8' />
            <AnimateText text="Skills I love, crafting digital wonders." durationtime='1' className='!text-base font-medium dark:text-zinc-300 text-zinc-700 text-center' />
            <HoverEffect className={'mb-28'} items={lovedSkills} />
        </>
    )
}
