import React from 'react'
import Flex from '@/components/ui/flex'
import Container from '@/components/ui/container'

const title = [
  {
    one: 'Bán tour số 1 việt name',
    two: 'Ứng dụng công nghệ mới nhất',
  },
  {
    one: 'Thanh toán linh hoạt',
    two: 'Liên kết với các tổ chức tài chính',
  },
  {
    one: 'Giá tour luôn tốt nhất',
    two: 'Chúng tôi luôn có giá tốt nhất cho bạn',
  },
]

function FirstHeroContent() {
  return (
    <Container>
      <Flex col gap={6} align='start' className="h-full py-6 md:flex-wrap xl:items-center md:flex-row ">
        {title.map((tit, index) => (
          <Flex key={index} className="gap-6 md:gap-2">
            <div className="text-4xl xl:text-6xl font-black font-bitter text-subtext">{`0${index + 1}`}</div>
            <div className="text-4xl xl:text-6xl text-muted-foreground">&gt;</div>
            <Flex col className="!items-start">
              <div className="text-base xl:text-xl">{tit.one}</div>
              <div className="text-base xl:text-xl text-muted-foreground">{tit.two}</div>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}

export default FirstHeroContent
