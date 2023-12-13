"use client"
// import Image from 'next/image'
import React, { useEffect } from 'react'
// import logo from '@/public/logo_png.png'
// import Link from 'next/link'
import Shery from 'sheryjs'
import shirt from "@/public/shirt.png"

export default function AnimatedHero() {

    useEffect(() => {
        
    }, []);
    return (
        <main className='w-screen bg-dark h-screen relative text-light'>
            <div id='back' className='back w-full h-full'>
                <div alt="shirt" className='w-full h-full absolute bg-orange' />
                <div alt="shirt" className='w-full h-full absolute bg-heroRed' />
                <div alt="shirt" className='w-full h-full absolute bg-green-400' />
            </div>
            <div id='top' className='w-full h-full absolute top-0 left-0  pointer-events-none'>
                <div id="workingarea" className='relative w-[80%] h-full max-w-[1920px] mx-auto pointer-events-auto'>
                    {/* <div id="nav" className='py-10 px-2 flex items-center justify-between uppercase text-sm'>
                        <div id="icon" className='flex gap-14 items-center font-semibold text-light'>
                            <Image src={logo} alt='Logo' className='h-12 w-auto '></Image>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>About</Link>
                        </div>
                        <div className='flex gap-14 items-center font-semibold text-light'>
                            <Link href={"/"}>Luxe</Link>
                            <Link href={"/"}>Contact</Link>
                        </div>
                    </div> */}
                    <div id="hero" className='w-full flex justify-between absolute top-1/2 -translate-y-1/2'>
                        <div id="heroleft" className='min-w-[50%] font-kajiro text-light'>
                            <div className="magnet ele h-[9vw] overflow-hidden">
                                <h1 className='text-[11vw] leading-[0.9]'>Shirts A story</h1>
                                <h1 className='text-[11vw] leading-[0.9]'>Shirts A story</h1>
                            </div>
                            <div className="ele h-[9vw] overflow-hidden">
                                <h1 className='text-[11vw] leading-[0.9]'>feels much</h1>
                                <h1 className='text-[11vw] leading-[0.9]'>feels much</h1>
                            </div>
                            <div className="ele h-[9vw] overflow-hidden">
                                <h1 className='text-[11vw] leading-[0.9]'>good.</h1>
                                <h1 className='text-[11vw] leading-[0.9]'>good.</h1>
                            </div>
                            <button className='pointer-events-auto text-[2.5vw] leading-none tracking-wider bg-light text-dark px-[3vw] py-[0.8vw] mt-[2vw]'>Explore Now</button>
                        </div>
                        <div id="heroright" className='flex flex-col items-right w-[17%] gap-5 text-right text-sm font-medium'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <div id='imageDiv' className='w-[200px] ml-auto h-[200px] bg-dark border-light border-2 p-2 shadow-[3px_3px_0_0] shadow-light'>
                                <div className="innerImage bg-darkRed/50 w-full h-full"></div>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non delectus nisi ut error, inventore.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non delectus nisi ut error, inventore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
