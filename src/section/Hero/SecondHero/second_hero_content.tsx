import Container from '@/components/custom/container'
import Flex from '@/components/custom/flex'
import Grid from '@/components/custom/grid'
import React from 'react'
import Airplane from '../../../../public/assets/icon/airplane'
import Image from 'next/image'
import Introduce from '../../../../public/assets/img/banner/hanquoc.jpg'

const title: {
  paragraph: { icon: string | null; content: string }[] | string
}[] = [
    { paragraph: 'HÃY CHỌN TRAVELGO' },
    {
      paragraph:
        '1.000 lý do tại sao bạn nên chọn đến với chúng tôi TravelGo, có 1 thế giới tuyệt đẹp quanh ta hãy đến với chúng tôi',
    },
    {
      paragraph:
        'Với hơn 16 năm kinh nghiệm tổ chức và triển khai các tour du lịch trong và ngoài nước, chúng tôi cam kết đem lại cho khách hàng những hành trình tuyệt vời và ấn tượng nhất thông qua những dịch vụ chuyên nghiệp mà chúng tôi thực hiện như :',
    },
    {
      paragraph: [
        { icon: null, content: 'Chuyến bay đẳng cấp' },
        { icon: null, content: 'Chuyến bay đẳng cấp' },
        { icon: null, content: 'Chuyến bay đẳng cấp' },
        { icon: null, content: 'Chuyến bay đẳng cấp' },
        { icon: null, content: 'Chuyến bay đẳng cấp' },
        { icon: null, content: 'Chuyến bay đẳng cấp' },
      ],
    },
  ]

function SecondHeroContent() {
  return (
    <Container>
      <Flex iscol className="gap-6 lg:flex-row">
        <Flex iscol className="gap-6">
          {title.map((titl, index) =>
            index <= 2 ? (
              <div
                key={index}
                className={`text-center ${index === 0 && 'text-2xl md:text-3xl font-black font-bitter'} ${index === 1 && 'text-base md:text-lg'} ${index === 2 && 'text-sm md:text-[15px] text-muted-foreground'}`}
              >
                {titl.paragraph.toString()}
              </div>
            ) : (
              <Grid template='col' count={2} key={index} className="md:!grid-cols-3 w-full gap-y-2">
                {Array.isArray(titl.paragraph) &&
                  titl.paragraph.map((tit, idx) => (
                    <Flex
                      key={index + idx}
                      justify={idx % 2 !== 0 ? 'end' : 'start'}
                      className={`gap-2 w-full font-medium text-sm ${(idx === 0 || idx === 3) ? 'md:justify-start' : (idx === 1 || idx === 4) ? 'md:justify-center' : 'md:justify-end'}`}>
                      <Airplane className="text-subtext fill-subtext h-3 w-3" />
                      <p>{tit.content}</p>
                    </Flex>
                  ))}
              </Grid>
            ),
          )}
        </Flex>

        <Container className="relative h-96">
          <Image
            src={Introduce}
            alt="test"
            fill
            objectFit="cover"
            className="absolute inset-0 w-full h-full mask"
          />
        </Container>
      </Flex>
    </Container >
  )
}

export default SecondHeroContent
