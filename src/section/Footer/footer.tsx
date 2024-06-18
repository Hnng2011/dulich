'use client'

import Link from 'next/link'
import Container from '@/components/ui/container'
import Flex from '@/components/ui/flex'
import React from 'react'
import Logo from '../../../public/assets/logo/logo'
import { Phone, MapPin, Mail, Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
    return (
        <div className='bg-subbackground'>
            <Flex col className='w-full h-full border-b-[2px] border-t-[1px] border-muted-foreground'>
                <Container>
                    <Flex gap={10} className='flex-col md:flex-row w-full py-12 gap-10 flex-wrap lg:flex-nowrap'>
                        <Flex col gap={3} className='w-full md:basis-1/3 lg:basis-1/4  text-sm' align='start'>
                            <Logo className='h-24 w-24' />
                            <Flex align='start' gap={2}>
                                <MapPin className='h-6 w-6 fill-contrast text-subbackground' />
                                <p>Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội,</p>
                            </Flex>
                            <Flex gap={2}>
                                <Phone className='h-6 w-6 fill-contrast text-subbackground' />
                                <p>0772029440</p>
                            </Flex>
                            <Flex gap={2}>
                                <Mail className='h-6 w-6 fill-contrast text-subbackground' />
                                <p>luphihung111@gmail.com</p>
                            </Flex>
                        </Flex>
                        <Flex col gap={3} className='w-full md:basis-1/3 lg:basis-1/4  text-sm' align='start'>
                            <h2 className='font-black text-xl font-bitter'>Dịch vụ của chúng tôi</h2>
                            <Link href=''>Về chúng tôi</Link>
                            <Link href=''>Tour trong nước</Link>
                            <Link href=''>Tour nước ngoài</Link>
                            <Link href=''>Tin tức</Link>
                            <Link href=''>Liên hệ</Link>
                        </Flex>
                        <Flex col gap={3} className='w-full md:basis-1/3 lg:basis-1/4  text-sm' align='start'>
                            <h2 className='font-black text-xl font-bitter'>Về chúng tôi</h2>
                            <Link href=''>Dịch vụ của chúng tôi</Link>
                            <Link href=''>Tour trong nước</Link>
                            <Link href=''>Tour nước ngoài</Link>
                            <Link href=''>Tin tức</Link>
                            <Link href=''>Liên hệ</Link>
                        </Flex>
                        <Flex col gap={3} className='w-full md:basis-1/3 lg:basis-1/4  text-sm' align='start'>
                            <h2 className='font-black text-xl font-bitter'>Chăm sóc khách hàng</h2>
                            <Link href=''>Chăm sóc khách hàng</Link>
                            <Link href=''>Tour trong nước</Link>
                            <Link href=''>Tour nước ngoài</Link>
                            <Link href=''>Tin tức</Link>
                            <Link href=''>Liên hệ</Link>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
            <Container className='h-full md:h-12'>
                <Flex className='h-full flex-col md:flex-row gap-4'>
                    <p>© Created by : <Link href=''>Lu Phi Hùng</Link></p>

                    <Flex gap={2}>
                        <Facebook />
                        <Youtube />
                        <Instagram />
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}

export default Footer