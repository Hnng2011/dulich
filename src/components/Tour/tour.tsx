import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { convertToLocalDate, countDays } from '@/utils/format_date'
import formatPrice from '@/utils/format_price'
import { Airplay, BadgePercent, Clock } from 'lucide-react'
import Image from 'next/image'
import Hot from '../../../public/assets/img/tags/hot.png'
import Fav from '../../../public/assets/img/tags/fav.png'

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
      <Image src={tour.img} fill alt="test" className="max-h-72 md:max-h-64 w-full" />
      {tour.tag === 'hot' ? (
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
      )}
      <Container className="h-72 md:h-64" />
      <CardHeader className="py-3">
        <CardTitle className="line-clamp-2 text-maintext">
          {tour.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Flex col={true} gap={3} align="start">
          <Flex className="w-full text-sm md:text-base">
            <Flex>
              <Clock className='h-4' />
              {convertToLocalDate(tour.timeStart)} /{' '}
              {countDays(tour.timeStart, tour.timeEnd)} ngày
            </Flex>
            <Flex gap={1}>
              <Airplay className="text-subtext h-4" />
              <Airplay className="text-subtext h-4" />
              <Airplay className="text-subtext h-4" />
            </Flex>
          </Flex>
          <Flex justify="start" gap={2} className="w-full">
            <BadgePercent className='text-contrast' />
            {tour.fixedPrice && (
              <h2 className="text-xl md:text-2xl text-contrast">
                {formatPrice(tour.fixedPrice[0], tour.fixedPrice[1])}
              </h2>
            )}
            {tour.fixedPrice && (
              <h2>
                <s>{formatPrice(tour.price[0], tour.price[1])}</s>
              </h2>
            )}
            <h2
              className={`${tour.fixedPrice ? 'hidden' : 'text-xl md:text-2xl text-contrast'}`}
            >
              {formatPrice(tour.price[0], tour.price[1])}
            </h2>
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  )
}
