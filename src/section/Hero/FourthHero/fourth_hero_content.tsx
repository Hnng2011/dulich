/* eslint-disable react/no-unescaped-entities */
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

const rating = [
  {
    rate: 'Gia đình mình đã sử dụng dịch vụ du lịch ở rất nhiều nơi, nhưng với TravelGo mình và gia đình luôn cảm thấy yên tâm nhất về chất lượng dịch vụ, cũng như chế độ chăm sóc tận tình  trong suốt hành trình, mình sẽ giới thiệu bạn bè tham gia và sử dụng dịch vụ du lịch vủa công ty. Nếu bạn chưa thử hay thử ngay và gửi phản hồi nhé, xem bạn có giống như mình không.',
    avtUrl: '',
    raterName: 'Phi Hùng',
  },
  {
    rate: 'Gia đình mình đã sử dụng dịch vụ du lịch ở rất nhiều nơi, nhưng với TravelGo mình và gia đình luôn cảm thấy yên tâm nhất về chất lượng dịch vụ, cũng như chế độ chăm sóc tận tình  trong suốt hành trình, mình sẽ giới thiệu bạn bè tham gia và sử dụng dịch vụ du lịch vủa công ty. Nếu bạn chưa thử hay thử ngay và gửi phản hồi nhé, xem bạn có giống như mình không.',
    avtUrl: '',
    raterName: 'Phi Hùng',
  },
]

function FourthdHeroContent() {
  return (
    <div className="relative w-full aspect-5/2">
      <Image src={Forest} fill alt="forest" />
      <Container className="h-full py-20">
        <Flex
          justify="center"
          col={true}
          className="bg-gray-300 backdrop-blur bg-opacity-10 h-full rounded-3xl shadow"
        >
          <h2 className="text-3xl font-black font-bitter uppercase">
            Khách hàng đánh giá
          </h2>
          <h3 className="text-muted-foreground">
            Mục tiêu hàng đầu của chúng tôi là sự hài lòng của khách hàng
          </h3>
          <Container className="h-14" />
          <Carousel className="w-full">
            <CarouselContent>
              {rating.map((rate, index) => (
                <CarouselItem key={index} className="">
                  <Flex col gap={6} justify="center">
                    <blockquote className="text-center w-2/3 italic">
                      "{rate.rate}"
                    </blockquote>
                    <Flex gap={6}>
                      <Avatar className="h-16 w-16 text-bitter">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <h3 className="uppercase font-bold">{rate.raterName}</h3>
                    </Flex>
                  </Flex>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Flex>
      </Container>
    </div>
  )
}

export default FourthdHeroContent
