import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import Grid from '@/components/ui/grid'
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
      <Flex className="gap-6">
        <Flex col={true} className="gap-6">
          {title.map((titl, index) =>
            index <= 2 ? (
              <div
                key={index}
                className={`text-center ${index === 0 && 'text-3xl font-black font-bitter'} ${index === 1 && 'text-lg'} ${index === 2 && 'text-[15px] text-muted-foreground'}`}
              >
                {titl.paragraph.toString()}
              </div>
            ) : (
              <Grid key={index} className="grid-cols-3 w-full gap-x-28 gap-y-2">
                {Array.isArray(titl.paragraph) &&
                  titl.paragraph.map((tit, idx) => (
                    <Flex
                      key={index + idx}
                      justify="between"
                      className="gap-2 w-full font-medium text-sm"
                    >
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
    </Container>
  )
}

export default SecondHeroContent
