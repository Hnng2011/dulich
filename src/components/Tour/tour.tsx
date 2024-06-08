import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import { convertToLocalDate, countDays } from '@/utils/format_date'
import formatPrice from '@/utils/format_price'
import { Airplay } from 'lucide-react'
import Image from 'next/image'
import Hot from '../../../public/assets/img/tags/hot.png'
import Fav from '../../../public/assets/img/tags/fav.png'
import Price from '../../../public/assets/icon/price-tag'

export default function TourInfo({
  tour,
  isHover = true,
}: {
  tour: TourInfo
  isHover?: boolean
}) {
  return (
    <Card
      className={`relative rounded overflow-hidden max-w-[324px] ${isHover ? '' : 'blur-sm'} duration-300`}
    >
      <Image src={tour.img} fill alt="test" className="max-h-64 w-full" />
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
      <Container className="h-64" />
      <CardHeader className="py-3">
        <CardTitle className="line-clamp-2 text-maintext">
          {tour.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Flex col={true} gap={3} align="start">
          <Flex className="w-full">
            <h2>
              {convertToLocalDate(tour.timeStart)} /{' '}
              {countDays(tour.timeStart, tour.timeEnd)} ngày
            </h2>
            <Flex gap={2}>
              <Airplay className="text-subtext" />
              <Airplay className="text-subtext" />
              <Airplay className="text-subtext" />
            </Flex>
          </Flex>
          <Flex justify="start" gap={2} className="w-full">
            <Price />
            {tour.fixedPrice && (
              <h2 className="text-2xl text-contrast">
                {formatPrice(tour.fixedPrice[0], tour.fixedPrice[1])}
              </h2>
            )}
            {tour.fixedPrice && (
              <h2>
                <s>{formatPrice(tour.price[0], tour.price[1])}</s>
              </h2>
            )}
            <h2
              className={`${tour.fixedPrice ? 'hidden' : 'text-2xl text-contrast'}`}
            >
              {formatPrice(tour.price[0], tour.price[1])}
            </h2>
          </Flex>
        </Flex>
      </CardContent>
    </Card>
  )
}
