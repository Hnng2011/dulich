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

const tour: TourInfo[] = [
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [1000000, 'vnd'],
    fixedPrice: [500000, 'vnd'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [3000000, 'vnd'],
    fixedPrice: [500000, 'vnd'],
    tag: 'hot',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'vnd'],
    fixedPrice: [500000, 'vnd'],
    tag: 'fav',
  },
  {
    img: 'https://bizweb.dktcdn.net/thumb/large/100/319/254/products/16.jpg?v=1529382039330',
    name: 'Đà Lạt Mộng Mơ - Nha Trang Biển Xanh - Da Nang dep nhu ngay tho',
    timeStart: new Date(Date.now()),
    timeEnd: new Date(Date.now() + Date.now()),
    transport: ['plane', 'boat'],
    price: [2000000, 'vnd'],
    fixedPrice: [500000, 'vnd'],
    tag: 'hot',
  },
]

function ThirdHeroContent() {
  const [cardHover, setCardHover] = useState<number | null>(null)

  return (
    <Container>
      <Flex className="items-start -skew-x-6">
        <h2 className="uppercase text-blackcus text-3xl font-black text-opacity-95 font-bitter text-subtext">
          HOT DEAL
        </h2>
        <p className="w-1/3 text-sm text-right text-muted-foreground">
          Đắm chìm trong các cảnh đẹp độc nhất , cuộc sống thú vị của Việt Nam
        </p>
      </Flex>
      <Container className="h-6" />
      <Container className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {tour.map((tou, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4"
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
        <Flex justify="end" gap={1.5} className="text-lg pr-2">
          <p>Xem thêm</p>
          <ArrowRightIcon className="h-5 w-5" />
        </Flex>
      </Link>

      <Container className="h-24" />

      <Flex className="items-start -skew-x-6">
        <h2 className="uppercase text-blackcus text-3xl font-black text-opacity-95 font-bitter text-subtext">
          YÊU THÍCH
        </h2>
        <p className="w-1/3 text-sm text-right text-muted-foreground">
          Đắm chìm trong các cảnh đẹp độc nhất , cuộc sống thú vị của Việt Nam
        </p>
      </Flex>
      <Container className="h-6" />
      <Container className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {tour.map((tou, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4"
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
        <Flex justify="end" gap={1.5} className="text-lg pr-2">
          <p>Xem thêm</p>
          <ArrowRightIcon className="h-5 w-5" />
        </Flex>
      </Link>
    </Container>
  )
}

export default ThirdHeroContent
