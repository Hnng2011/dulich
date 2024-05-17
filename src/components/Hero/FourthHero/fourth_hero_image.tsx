'use client'

import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import formatPrice from '@/utils/format_price';

function FourthHeroImage({ src, title, price }: { src: string, title: string, price: number }) {
    return (
        <Link href={'/'} className='block relative'>
            <div className='absolute inset-0 w-full h-[365px] hover:bg-black hover:bg-opacity-50 duration-200 rounded-sm'></div>
            <Image loading="eager" objectFit="contain" fill src={src} alt="banner" className='!static !w-full !h-[365px] !object-cover rounded-sm' />
            <div className='mt-2 font-bold line-clamp-1'>{title}</div>
            <div className='font-bold flex-center mt-2'>
                <div className='font-bold line-clamp-1 text-red-500'>{formatPrice(price)} VNĐ</div>
            </div>
        </Link>
    )
}

export default FourthHeroImage