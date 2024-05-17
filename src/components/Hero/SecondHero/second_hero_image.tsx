'use client'

import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link';

function SecondHeroImage({ src, title, index, price }: { src: string, title: string, index: number, price: string }) {
    return (
        <Link href={'/'} className={`block ${index === 0 && 'col-span-2'}`}>
            <Image loading="eager" objectFit="contain" fill src={src} alt="banner" className='!static !w-full !h-[365px] !object-cover rounded-sm' />
            <h3 className='mt-2 font-bold line-clamp-1'>{title}</h3>
            <h3 className='mt-2 font-bold line-clamp-1 text-red-500'>{price} VNĐ</h3>
        </Link>
    )
}

export default SecondHeroImage