'use client'

import React, { useState } from 'react'
import Image from "next/image"

const Source = [
    {
        src: '/assets/img/banner/vietnam.jpg',
        alt: 'Việt Nam',
    },
    {
        src: '/assets/img/banner/hanquoc.jpg',
        alt: 'Hàn Quốc',
    }, {
        src: '/assets/img/banner/hoian.jpg',
        alt: 'Tất Cả',
    },
]

function FirstHeroImage() {
    const [source, setSource] = useState<ResponseImage[] | undefined>(Source)

    return (
        <div className="relative aspect-5/2">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50 z-10" />
            {source && <Image src={source?.[0].src} alt={source?.[0]?.alt} fill />}
        </div>
    )
}

export default FirstHeroImage