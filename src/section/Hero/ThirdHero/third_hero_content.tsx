'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import TourInfo from '@/components/Tour/tour'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { ArrowRightIcon } from 'lucide-react'
import Autoplay from "embla-carousel-autoplay"

const tour: TourInfo[] = [
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [1000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [3000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'fav',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'VND'],
    fixedPrice: [500000, 'VND'],
    tag: 'hot',
  },
]

function ThirdHeroContent() {
  const [cardHover, setCardHover] = useState<number | null>(null)
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
        <Carousel plugins={[Autoplay({ stopOnInteraction: false })]} className="w-full">
          <CarouselContent>
            {tour.map((tou, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                onMouseMove={() => setCardHover(index + 1)}
                onMouseLeave={() => setCardHover(null)}
              >
                <Link href="" className="">
                  <TourInfo
                    tour={tou}
                    isHover={!(cardHover && cardHover !== index + 1)}
                  />
                </Link>
              </CarouselItem>
            ))}
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
        <Carousel plugins={[Autoplay({ stopOnInteraction: false })]} className="w-full">
          <CarouselContent>
            {tour.map((tou, index) => (
              <CarouselItem
                key={index}
                className="w-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                onMouseMove={() => setCardHover(index + 1)}
                onMouseLeave={() => setCardHover(null)}
              >
                <Link href="" className="">
                  <TourInfo
                    tour={tou}
                    isHover={!(cardHover && cardHover !== index + 1)}
                  />
                </Link>
              </CarouselItem>
            ))}
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
