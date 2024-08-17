import React from 'react'
import Container from '@/components/custom/container'
import Flex from '@/components/custom/flex'
import Image from 'next/image'
import Link from 'next/link'
import { convertToLocalDate } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const news: NewInfo[] = [
  {
    image_link: ['https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267'],
    title: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết một lần trong đời ',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
  {
    image_link: ['https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267'],
    title: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
  {
    image_link: ['https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267'],
    title: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
]

function FifthHeroContent() {
  return (
    <Container>
      <h2 className='uppercase text-2xl md:text-3xl font-black font-bitter text-center'>Tin khuyến mãi</h2>
      <Container className='h-12' />
      <Flex isCol gap={6} align='start' className='md:flex-row'>
        {news.map((inf, index) =>
          <Flex isCol gap={6} align='start' key={index} className='w-full md:basis-1/3 h-full'>
            <div className='aspect-4/3 w-full relative'>
              <Image alt="news" src={inf.image_link[0]} fill />
            </div>
            <Flex isCol gap={2}>
              <h3 className='font-semibold text-base md:text-lg line-clamp-2'>
                {inf.title}
              </h3>
              <Flex justify='start' align='center' className='w-full'>
                <p className='text-gray-600 text-sm md:text-base'>{convertToLocalDate(inf.time)} | Tác giả: {inf.author}</p>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
      <Container className='h-4' />
      <Link href="">
        <Flex justify="end" gap={1.5} className="text-base md:text-lg pr-2">
          <p>Xem thêm</p>
          <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
        </Flex>
      </Link>
      <Container className='h-24' />
      <h2 className='font-black font-bitter text-3xl w-full text-center'>Nhận tin khuyến mãi ?</h2>
      <Container className='h-6' />
      <Flex justify='center' gap={2} className="w-full">
        <Input className='!h-11 max-w-lg' type="email" placeholder="Email" />
        <Button size="lg" type="submit">Subscribe</Button>
      </Flex>
    </Container>
  )
}

export default FifthHeroContent
