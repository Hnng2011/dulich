'use client'

import './styles.css';
import LottieAnimation from '../ui/lottie';
import Fire from '../../../public/assets/lotties/Fire.json';
import Korean from '../../../public/assets/lotties/Korean.json';
import Vietnam from '../../../public/assets/lotties/Vietnam.json';
import { useTranslation } from '../../context/language_provider';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';

const source = [
    {
        src: '/assets/img/test1.jpg',
        title: 'Bình Thuận',
    },
    {
        src: '/assets/img/banner/thuyen.jpg',
        title: 'Đà Nẵng',
    }, {
        src: '/assets/img/banner/bien.jpg',
        title: 'Bình Định',
    }, {
        src: '/assets/img/banner/hoian.jpg',
        title: 'Bình Thuận',
    },

    {
        src: '/assets/img/test2.jpg',
        title: 'Bình Thuận',
    },


    {
        src: '/assets/img/cantho.jpg',
        title: 'Bình Thuận',
    },

    {
        src: '/assets/img/test3.jpg',
        title: 'Bình Thuận',
    },
    {
        src: '/assets/img/test4.jpg',
        title: 'Bình Thuận',
    },
    {
        src: '/assets/img/haugiang.jpg',
        title: 'Bình Thuận',
    },
]

export default function SecondHero() {
    const t = useTranslation();

    return (
        <div className='h-screen w-screen items-center '>
            <div className={`container  ${source.length > 8 ? 'columns-3' : source.length > 1 ? 'columns-2' : 'columns-1'} gap-3 items-center`}>
                {source.map((src, index) => <Link key={index} href={'/'}><Image loading="eager" objectFit="contain" fill src={src.src} alt="banner" className='!static w-full mb-3 ' /></Link>)}
            </div>

            <div className='container mt-16'>
                <div className='flex-center justify-start items-center'>
                    <h2 className="text-4xl font-extrabold text-marooncus text-center">
                        {t?.banner?.hottour}
                    </h2>
                    <LottieAnimation animationData={Fire} className='w-[4rem] h-[4rem]' loop={true} autoplay={true} />
                </div>
                <Carousel className="w-full mt-2" opts={{ loop: true, watchDrag: false }} plugins={[
                    Autoplay({
                        delay: 12000,
                    }),
                ]}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className='basis-1/3'>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='container mt-16'>
                <div className='flex-center justify-start items-center'>
                    <h2 className="text-4xl font-extrabold text-marooncus text-center">
                        {t?.banner?.korean}
                    </h2>
                    <LottieAnimation animationData={Korean} className='w-[4rem] h-[4rem]' loop={true} autoplay={true} />
                </div>
                <Carousel className="w-full mt-2" opts={{ loop: true, watchDrag: false }} plugins={[
                    Autoplay({
                        delay: 12000,
                    }),
                ]}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className='basis-1/3'>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className='container mt-16'>
                <div className='flex-center justify-start items-center'>
                    <h2 className="text-4xl font-extrabold text-marooncus text-center">
                        {t?.banner?.vietnam}
                    </h2>
                    <LottieAnimation animationData={Vietnam} className='w-[4rem] h-[4rem]' loop={true} autoplay={true} />
                </div>
                <Carousel className="w-full mt-2" opts={{ loop: true, watchDrag: false }} plugins={[
                    Autoplay({
                        delay: 12000,
                    }),
                ]}>
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className='basis-1/3'>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div >
    );
}
