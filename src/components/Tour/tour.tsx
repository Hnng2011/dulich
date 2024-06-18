import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { convertToLocalDate, countDays } from '@/utils/format_date'
import formatPrice from '@/utils/format_price'
import { Users, BadgePercent, Clock } from 'lucide-react'
import Image from 'next/image'
// import Hot from '../../../public/assets/img/tags/hot.png'
// import Fav from '../../../public/assets/img/tags/fav.png'

export default function TourInfo({
  tour,
  isHover = true,
}: {
  tour: TourInfo
  isHover?: boolean
}) {
  return (
    <Card
      className={`relative rounded overflow-hidden lg:max-w-[324px] ${isHover ? '' : 'blur-sm'} duration-300`}
    >
      <Image src={tour.image_link[0]} fill alt="test" className="max-h-72 md:max-h-64 w-full" />
      {/* {tour.tag === 'hot' ? (
        <Image
          src={Hot}
          width={60}
          height={60}
          alt="test"
          className="top-2 left-2 z-20 absolute"
        />
      ) : (
        <Image
          src={Fav}
          width={35}
          height={35}
          alt="test"
          className="top-2 left-4 z-20 absolute -rotate-45"
        />
      )} */}
      <Container className="h-72 md:h-64" />
      <CardHeader className="py-3">
        <CardTitle className="line-clamp-2 text-maintext">
          {tour.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Flex col gap={3} align="start">
          <Flex className="w-full text-sm md:text-base">
            <Flex gap={1}>
              <Clock className='h-5' />
              {convertToLocalDate(new Date(tour.start_date))}
              {/* /{' '} {countDays(tour.timeStart, tour.timeEnd)} ngày */}
            </Flex>
            <Flex gap={1} className='text-subtext'>
              <Users className="h-5" />
              {tour.slot}
            </Flex>
          </Flex>
          <Flex justify="start" gap={2} className="w-full">
            <BadgePercent className='text-contrast shrink-0' />
            {tour.price_before_discount ? (
              <>
                <h2 className="text-xl md:text-2xl text-contrast">
                  {formatPrice(tour.price_after_discount, 'VND')}
                </h2>
                <h2>
                  <s>{formatPrice(tour.price_before_discount, 'VND')}</s>
                </h2>
              </>
            ) : <h2
              className='text-xl md:text-2xl text-contrast'
            >
              {formatPrice(tour.price_after_discount, 'VND')}
            </h2>
            }
          </Flex>
        </Flex>
      </CardContent>
    </Card >
  )
}
