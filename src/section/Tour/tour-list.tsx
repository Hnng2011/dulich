'use client'

import React from 'react'
import { useGetTours } from '@/api/get_data'
import TourInfo from '@/components/Tour/tour'
import Container from '@/components/ui/container'
import { Divider } from '@/components/ui/divider'
import Flex from '@/components/ui/flex'
import Grid from '@/components/ui/grid'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'

const TourList = () => {
    const { data } = useGetTours()

    return (
        <Container className='mb-12'>
            <Flex justify='start' gap={3} className='h-24'>
                <Select>
                    <SelectTrigger icon className="w-[180px]">
                        <SelectValue placeholder="Sắp xếp" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger icon className="w-[180px]">
                        <SelectValue placeholder="Điểm đến" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger icon className="w-[180px]">
                        <SelectValue placeholder="Chỗ còn" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Flex>

            <Divider />

            <Grid template='col' count={1} gap={2} className='pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data ?
                    data.map((tou, index) => (
                        <Link key={index} href={`/tour/name=${tou.title}&id=${tou.tour_id}`} className='w-full'>
                            <TourInfo
                                tour={tou}
                            />
                        </Link>
                    )) : Array.from({ length: 4 }, (_, index) =>
                        <Skeleton key={index} className='w-full md:h-[402px]' />
                    )}
            </Grid>
        </Container>
    )
}

export default TourList