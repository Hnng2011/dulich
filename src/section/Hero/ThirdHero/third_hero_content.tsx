'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TourInfo from '@/components/Tour/tour'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { ArrowRightIcon } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"
import { Skeleton } from "@/components/ui/skeleton"
import { useGetTours } from '@/api/get_data'


function ThirdHeroContent() {
  const [cardHover, setCardHover] = useState<number | null>(null)
  const { data } = useGetTours()

  return (
    <Container>
      <Flex align='start' className="-skew-x-6">
        <h2 className="uppercase text-2xl md:text-3xl font-black text-opacity-95 font-bitter">
          HOT DEAL
        </h2>
        <p className="w-1/2 md:w-1/3 text-sm text-right text-muted-foreground">
          Đắm chìm trong các cảnh đẹp độc nhất , cuộc sống thú vị của Việt Nam
        </p>
      </Flex>
      <Container className="h-6" />
      <Container className="p-0">
        <Carousel opts={{ loop: true }} plugins={[Autoplay({ stopOnInteraction: false })]} className="w-full">
          <CarouselContent>
            {data ? data.map((tou, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 rounded-md"
                onMouseMove={() => setCardHover(index + 1)}
                onMouseLeave={() => setCardHover(null)}
              >
                <Link href={`/tour/name=${tou.title}&id=${tou.tour_id}`} className="">
                  <TourInfo
                    tour={tou}
                    isHover={!(cardHover && cardHover !== index + 1)}
                  />
                </Link>
              </CarouselItem>
            )) : Array.from({ length: 4 }, (_, index) =>
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Skeleton className='w-full lg:max-w-[324px] md:h-[402px] rounded' />
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </Container>
      <Container className="h-6" />
      <Link href="">
        <Flex justify="end" gap={1.5} className="text-base md:text-lg pr-2">
          <p>Xem thêm</p>
          <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
        </Flex>
      </Link>

      <Container className="h-24" />

      <Flex align='start' className="-skew-x-6">
        <h2 className="uppercase text-3xl font-black text-opacity-95 font-bitter">
          YÊU THÍCH
        </h2>
        <p className="w-1/2 md:w-1/3 text-sm text-right text-muted-foreground">
          Đắm chìm trong các cảnh đẹp độc nhất , cuộc sống thú vị của Việt Nam
        </p>
      </Flex>
      <Container className="h-6" />
      <Container className="p-0">
        <Carousel opts={{ loop: true }} plugins={[Autoplay({ stopOnInteraction: false })]} className="w-full">
          <CarouselContent>
            {data ? data.map((tou, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                onMouseMove={() => setCardHover(index + 1)}
                onMouseLeave={() => setCardHover(null)}
              >
                <Link href={`/tour/?name=${tou.title}&id=${tou.tour_id}`} className="">
                  <TourInfo
                    tour={tou}
                    isHover={!(cardHover && cardHover !== index + 1)}
                  />
                </Link>
              </CarouselItem>
            )) : Array.from({ length: 4 }, (_, index) =>
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Skeleton className='w-full lg:max-w-[324px] md:h-[402px]' />
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </Container>
      <Container className="h-6" />

      <Link href="">
        <Flex justify="end" gap={1.5} className="text-base md:text-lg pr-2">
          <p>Xem thêm</p>
          <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
        </Flex>
      </Link>
    </Container>
  )
}

export default ThirdHeroContent
