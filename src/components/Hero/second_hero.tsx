'use client'

import './styles.css';
import { useTranslation } from '../../context/language_provider';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import Image from 'next/image';

const source = [
    {
        src: '/assets/img/test1.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: "1,000,000",
    },
    {
        src: '/assets/img/banner/thuyen.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: "1,000,000",
    }, {
        src: '/assets/img/banner/bien.jpg',
        title: 'Bình Định',
        price: "1,000,000",
    }, {
        src: '/assets/img/banner/hoian.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    }, {
        src: '/assets/img/haugiang.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    }, {
        src: '/assets/img/cantho.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    },
]

export default function SecondHero() {
    const t = useTranslation();

    return (
        <div className='h-screen w-screen items-center mt-16'>
            <div className='flex-center container items-start -skew-x-6'>
                <h2 className='uppercase text-blackcus text-6xl font-black text-opacity-95 '>Hot tour</h2>
                <p className='w-1/3 text-sm text-right text-gray-400'>Khám phá các tour hot nhất tuần qua của chúng tôi và đăng kí ngay hôm nay</p>
            </div>
            <div className={`container grid grid-cols-4 gap-10 place-items-start mt-6 `}>
                {source.map((src, index) => {
                    return <Link key={index} href={'/'} className={`block ${index === 0 && 'col-span-2'}`}>
                        <Image loading="eager" objectFit="contain" fill src={src.src} alt="banner" className='!static !w-full !h-[365px] !object-cover rounded-sm' />
                        <h3 className='mt-2 font-bold line-clamp-1'>{src.title}</h3>
                        <h3 className='mt-2 font-bold line-clamp-1 text-red-500'>{src.price} VNĐ</h3>
                    </Link>
                })}
            </div>
        </div >
    );
}
