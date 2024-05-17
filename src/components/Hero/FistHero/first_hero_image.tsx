'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

function FirstHeroImage({ src, title, index, showContent }: { src: string, title: string, index: number, showContent: boolean }) {
    const [isHovered, setIsHovered] = useState<number | null>(null);


    return (
        <div className="relative" onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(null)}>
            <h2 className={`absolute w-full z-[2] pointer-events-none text-white ${isHovered === index ? "inset-y-[45%]" : "inset-y-1/2"} text-center text-5xl font-spins animate__animated animate__fadeInDownBig animate__delay-${index + 1}s ${showContent && 'duration-200'}`}>{title}</h2>
            <div className="absolute w-full h-full bg-black/80 backdrop-blur-sm hover:bg-black/50 hover:backdrop-blur-none duration-500 z-[1]"></div>
            <Button className={`absolute z-[2] cursor-pointer inset-x-1/2 ${isHovered === index ? "inset-y-[60%]" : "inset-y-1/2"}  w-[160px] h-[60px] translate-x-[-80px] bg-transparent border-2 rounded-none border-white text-base hover:text-black hover:bg-white transition-all ${showContent && 'duration-200'} ${isHovered === index ? 'opacity-100' : 'opacity-0'}`}>Khám phá</Button>
            <Image src={src} alt={title} fill className="h-full !basis-1/3 !static  object-cover animate__animated animate__fadeIn z-[0] animate__delay-1s" />
        </div>
    )
}

export default FirstHeroImage