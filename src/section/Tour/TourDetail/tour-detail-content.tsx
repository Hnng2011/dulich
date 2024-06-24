'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { useGetTour } from '@/api/get_data'
import { convertToLocalDate } from '@/utils/format_date'
import { formatPrice } from '@/utils/format_price'
import { Clock, MapPinned } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/context/language_provider'
import { Divider } from '@/components/ui/divider'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Lightbox, useLightbox } from '@/components/ui/lightbox'
import Autoplay from "embla-carousel-autoplay"

const TourDetailContent = ({ tour_id }: { tour_id: string }) => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState<number>(0)
    const { requestOpen } = useLightbox()
    const { t } = useLanguage()
    const { data } = useGetTour(tour_id)

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])


    const handleSetCurrent = useCallback((index: number) => {
        if (!api)
            return

        setCurrent(index)
    }, [api])

    return (
        <>
            <Lightbox images={data?.image_link} />
            <Flex align='start' className='mt-12'>
                {data &&
                    <Flex col align='start' className='gap-12 lg:gap-40 md:flex-row'>
                        <Container className='basis-1/2 px-0'>
                            <Image onClick={() => requestOpen()} src={data.image_link[current]} fill alt='tour info' className='!static aspect-video cursor-pointer' />
                            <Container className='h-4' />
                            <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }} plugins={[Autoplay({ stopOnInteraction: false })]} className="w-full" >
                                <CarouselContent>
                                    {data.image_link.map((src, index) => (
                                        <CarouselItem key={index} onClick={() => handleSetCurrent(index)} className='basis-1/4 h-24'>
                                            <Image src={src} fill alt='tour info' className={`!static rounded ${current === index ? 'border-maintext' : 'border-transparent'}  border-2 duration-300 object-cover`} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </Container>

                        <Flex col align='start' gap={4} className='basis-1/2 text-maintext'>
                            <h2 className='text-3xl lg:text-4xl font-black text-subtext'>{data.title}</h2>
                            <div className='text-sm lg:text-base text-maintext text-muted-foreground'>{data.detail}</div>
                            <Divider className='w-1/2' />
                            <Flex gap={1} className='text-sm'>
                                <Clock className='h-3' />
                                {convertToLocalDate(new Date(data.start_date))}
                            </Flex>

                            <Flex gap={1} className='text-sm'>
                                <MapPinned className='h-3' />
                                <div>{data.destination}</div>
                            </Flex>
                            <Divider className='w-1/2' />
                            <Flex justify="start" gap={3} className="w-full">
                                {data.price_before_discount ? (
                                    <>
                                        <h2 className="text-xl md:text-2xl text-contrast">
                                            {formatPrice(data.price_after_discount, 'VND')}
                                        </h2>
                                        <h2>
                                            <s>{formatPrice(data.price_before_discount, 'VND')}</s>
                                        </h2>
                                    </>
                                ) : <h2
                                    className='text-xl md:text-2xl text-contrast'
                                >
                                    {formatPrice(data.price_after_discount, 'VND')}
                                </h2>
                                }
                            </Flex>
                            <div>( {t?.tour.detail.slot}: {data.slot} )</div>
                            <Button className='bg-maintext'>{t?.tour.detail.action}</Button>
                        </Flex>
                    </Flex>}
            </Flex>
        </>
    )
}

export default TourDetailContent