import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import Forest from '../../../../public/assets/img/forest.png'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { convertToLocalDate } from '@/utils/format_date'

const news: NewInfo[] = [
  {
    img: 'https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267',
    name: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết một lần trong đời ',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
  {
    img: 'https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267',
    name: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
  {
    img: 'https://bizweb.dktcdn.net/100/319/254/articles/nui-than-tai-1.jpg?v=1529378837267',
    name: 'Kinh Nghiệm đi du lịch sapa ai cũng nên biết',
    author: 'Phi Hùng',
    time: new Date(Date.now())
  },
]

function FifthHeroContent() {
  return (
    <Container>
      <h2 className='uppercase text-3xl font-black font-bitter text-center'>Tin khuyến mãi</h2>
      <Container className='h-12' />
      <Flex gap={6} align='start'>
        {news.map((inf, index) =>
          <Flex col gap={6} align='start' key={index} className='basis-1/3 h-full'>
            <div className='aspect-4/3 w-full relative'>
              <Image alt="news" src={inf.img} fill />
            </div>
            <Flex col gap={2}>
              <h3 className='font-semibold text-lg line-clamp-2'>
                {inf.name}
              </h3>
              <Flex justify='start' align='center' className='w-full'>
                <p className='text-gray-600'>{convertToLocalDate(inf.time)} | Tác giả: {inf.author}</p>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Container>
  )
}

export default FifthHeroContent
