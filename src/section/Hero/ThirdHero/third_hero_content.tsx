'use client'

import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import formatPrice from '@/utils/format_price';
import Flex from '@/components/ui/flex';
import Test from '../../../../public/assets/img/binhthuan.png'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function ThirdHeroContent() {
    return (
        <Flex className='gap-6'>
            <Link href='' className='basis-1/4'>
                <Card className='relative rounded overflow-hidden'>
                    <Image src={Test} alt='test' className='h-64 w-full' />
                    <CardHeader>
                        <CardTitle >Đà Lạt Mộng Mơ - Nha Trang Biển Xanh</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2>Đà Lạt</h2>
                        <p>3 ngày 2 đêm</p>
                        <p>Giá : 1000000</p>
                    </CardContent>
                </Card>
            </Link>
            <Link href='' className='basis-1/4'>
                <Card className='relative rounded overflow-hidden'>
                    <Image src={Test} alt='test' className='h-64 w-full' />
                    <CardHeader>
                        <CardTitle>Đà Lạt Mộng Mơ - Nha Trang Biển Xanh</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2>Đà Lạt</h2>
                        <p>3 ngày 2 đêm</p>
                        <p>Giá : 1000000</p>
                    </CardContent>
                </Card>
            </Link>
            <Link href='' className='basis-1/4'>
                <Card className='relative rounded overflow-hidden'>
                    <Image src={Test} alt='test' className='h-64 w-full' />
                    <CardHeader>
                        <CardTitle>Đà Lạt</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2>Đà Lạt</h2>
                        <p>3 ngày 2 đêm</p>
                        <p>Giá : 1000000</p>
                    </CardContent>
                </Card>
            </Link>
            <Link href='' className='basis-1/4'>
                <Card className='relative rounded overflow-hidden'>
                    <Image src={Test} alt='test' className='h-64 w-full' />
                    <CardHeader>
                        <CardTitle>Đà Lạt</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2>Đà Lạt</h2>
                        <p>3 ngày 2 đêm</p>
                        <p>Giá : 1000000</p>
                    </CardContent>
                </Card>
            </Link>
        </Flex>
    )
}

export default ThirdHeroContent