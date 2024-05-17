'use client'

import * as React from "react"
import 'animate.css';
import { useEffect, useState } from "react";
import FirstHeroImage from "./FistHero/first_hero_image";

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
                    return <FirstHeroImage key={index} index={index} title={item.title} src={item.src} showContent={showContent} />;
                })
            }
        </div >
    )
}
