'use client'

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import 'animate.css';
import { useEffect, useState } from "react";


const source = [
    {
        src: '/assets/img/banner/vietnam.jpg',
        title: 'Việt Nam',
    },
    {
        src: '/assets/img/banner/hanquoc.jpg',
        title: 'Hàn Quốc',
    }, {
        src: '/assets/img/banner/hoian.jpg',
        title: 'Tất Cả',
    },
]

export default function FirstHero() {
    const [showContent, setShowContent] = useState(false);
    const [isHovered, setIsHovered] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3500);

        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <div className={`h-screen w-screen grid grid-cols-3 ${!showContent ? 'pointer-events-none' : ""}`}>
            {
                source.map((item, index) => {
                    return <div key={index} className="relative" onMouseEnter={() => setIsHovered(index)} onMouseLeave={() => setIsHovered(null)}>
                        <h2 className={`absolute w-full z-[2] pointer-events-none text-white ${isHovered === index ? "inset-y-[45%]" : "inset-y-1/2"} text-center text-5xl font-spins animate__animated animate__fadeInDownBig animate__delay-${index + 1}s ${showContent && 'duration-200'}`}>{item.title}</h2>
                        <div className="absolute w-full h-full bg-black/80 backdrop-blur-sm hover:bg-black/50 hover:backdrop-blur-none duration-500 z-[1]"></div>
                        <Button key={index} className={`absolute z-[2] cursor-pointer inset-x-1/2 ${isHovered === index ? "inset-y-[60%]" : "inset-y-1/2"}  w-[160px] h-[60px] translate-x-[-80px] bg-transparent border-2 rounded-none border-white text-base hover:text-black hover:bg-white transition-all ${showContent && 'duration-200'} ${isHovered === index ? 'opacity-100' : 'opacity-0'}`}>Khám phá</Button>
                        < Image src={item.src} alt={item.title} fill className="h-full !basis-1/3 !static  object-cover animate__animated animate__fadeIn z-[0] animate__delay-1s" />
                    </div>
                })
            }
        </div >
    )
}
