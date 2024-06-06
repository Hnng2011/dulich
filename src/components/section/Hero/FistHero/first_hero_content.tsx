import React from 'react'
import Flex from '@/components/ui/flex'
import Container from '@/components/ui/container'

const title = [{
    one: 'Bán tour số 1 việt name',
    two: 'Ứng dụng công nghệ mới nhất'
}, {
    one: 'Thanh toán linh hoạt',
    two: 'Liên kết với các tổ chức tài chính'
}, {
    one: 'Giá tour luôn tốt nhất',
    two: 'Chúng tôi luôn có giá tốt nhất cho bạn'
}]

function FirstHeroContent() {
    return (
        <Container className="h-36">
            <Flex className='h-full'>
                {title.map((tit, index) =>
                    <Flex key={index} className='gap-6'>
                        <div className='text-6xl font-black font-bitter text-muted-foreground'>{`0${index + 1}`}</div>
                        <Flex className='flex-col !items-start'>
                            <div className='text-xl'>{tit.one}</div>
                            <div className='text-muted-foreground'>{tit.two}</div>
                        </Flex>
                    </Flex>)}
            </Flex>
        </Container>
    )
}

export default FirstHeroContent