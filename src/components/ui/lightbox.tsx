/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLProps, useEffect, useState } from 'react';
import { create } from 'zustand'
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Container from './container';
import {
    Carousel, CarouselContent, CarouselItem, type CarouselApi, CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Flex from './flex';

interface LightboxState {
    open: boolean
    requestClose: () => void
    requestOpen: () => void
}

const useStoreLightbox = create<LightboxState>((set) => ({
    open: false,
    requestClose: () => set(() => ({ open: false })),
    requestOpen: () => set(() => ({ open: true })),
}))

const useLightbox = () => {
    const open = useStoreLightbox((state) => state.open)
    const requestOpen = useStoreLightbox((state) => state.requestOpen)
    const requestClose = useStoreLightbox((state) => state.requestClose)
    return { open, requestOpen, requestClose }
}

interface LightboxProp extends HTMLProps<HTMLDivElement> {
    images?: string[];
    current?: number
}

const Lightbox: React.FC<LightboxProp> = (props) => {
    const { open, requestClose } = useLightbox()
    const lightboxClassname = cn('w-full h-full fixed inset-0 bg-mainbackground z-50 duration-300 bg-opacity-70 backdrop-blur', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none');
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState<number>(props?.current || 0)

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })

    }, [api])

    return (
        <div
            {...props}
            className={lightboxClassname}
        >
            <Container className='relative h-full w-full'>
                <X onClick={requestClose} className='cursor-pointer h-8 w-8 right-6 top-4 absolute' />
                <Flex gap={4} justify='center' col className='h-full md:gap-8'>
                    {props.images &&
                        <>
                            <Image src={props.images[current]} alt='light-box' fill className='!static !w-[82%] lg:w-full max-w-screen-md max-h-64 md:max-h-96 object-fill lg:object-cover' />
                            <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }} className="w-[82%] lg:w-full md:max-w-screen-md" >
                                <CarouselContent>
                                    {props.images?.map((src, index) => (
                                        <CarouselItem key={index} onClick={() => setCurrent(index)} className='basis-1/4 h-24'>
                                            <Image src={src} fill alt='tour info' className={`!static rounded ${current === index ? 'border-maintext' : 'border-transparent'}  border-2 duration-300 object-cover`} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselNext className='bg-subtext text-white' />
                                <CarouselPrevious className='bg-subtext text-white' />
                            </Carousel>
                        </>
                    }
                </Flex>
            </Container>

        </div>
    );
};

export { Lightbox, useLightbox };
