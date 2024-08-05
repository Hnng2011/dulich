import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Flex from '@/components/custom/flex'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { convertToLocalDate } from '@/lib/utils'
import { formatPrice } from '@/lib/utils'
import { Users, BadgePercent, Clock, Pencil, Trash, Copy, EllipsisVertical } from 'lucide-react'

export default function TourInfoAdmin({
    tour
}: {
    tour: TourInfo
}) {
    const router = useRouter()

    const routeChange = () => {
        router.push(`tour/${tour.tour_id}`)
    }

    return (
        <Card
            className="relative rounded-md overflow-hidden p-2"
        >
            <Flex align='start'>
                <Image src={tour.image_link[0]} fill alt="test" className="!static aspect-square max-h-28 max-w-28 rounded" />
                <CardHeader className="h-28 w-full p-0 px-2">
                    <CardTitle className={"line-clamp-1 !text-lg text-maintext"}>
                        {tour.title}
                    </CardTitle>
                    <CardTitle className="line-clamp-3 lg:line-clamp-4 !text-sm font-normal text-muted-foreground">
                        {tour.detail}
                    </CardTitle>
                </CardHeader>
                <DropdownMenu>
                    <DropdownMenuTrigger className='rounded-full'><EllipsisVertical className='h-7 w-7 p-1' /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={routeChange}><Pencil className='mr-2 h-4 w-4' /><span>Chỉnh sửa</span></DropdownMenuItem>
                        <DropdownMenuItem onClick={routeChange}><Trash className='mr-2 h-4 w-4' /><span>Xóa</span></DropdownMenuItem>
                        <DropdownMenuItem onClick={routeChange}><Copy className='mr-2 h-4 w-4' /><span>Nhân bản</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </Flex>
            <CardContent className='p-0 mt-4'>
                <Flex col gap={1} align="start">
                    <Flex className="w-full text-sm">
                        <Flex gap={1}>
                            <Clock className='h-4' />
                            {convertToLocalDate(new Date(tour.start_date))}
                            {/* /{' '} {countDays(tour.timeStart, tour.timeEnd)} ngày */}
                        </Flex>
                        <Flex gap={1} className='text-subtext'>
                            <Users className="h-4" />
                            {tour.slot}
                        </Flex>
                    </Flex>
                    <Flex justify="start" gap={1} className="w-full">
                        <BadgePercent className='text-contrast shrink-0 h-5' />
                        {tour.price_before_discount ? (
                            <>
                                <h2 className="text-lg text-contrast mr-2">
                                    {formatPrice(tour.price_after_discount, 'VND')}
                                </h2>
                                <h2>
                                    <del>{formatPrice(tour.price_before_discount, 'VND')}</del>
                                </h2>
                            </>
                        ) : <h2
                            className='text-base text-contrast'
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
