/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useGetTours } from '@/api/get_data'
import TourInfo from '@/components/custom/tour'
import Grid from '@/components/custom/grid'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import React from 'react'

function TourListContent(props: any) {
    const { data } = useGetTours()
    return (
        <Grid template='col' count={1} gap={2} className={props?.admin ? 'pt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}>
            {data ?
                data.map((tou, index) => (
                    <Link scroll key={index} href={`/tour/name=${tou.title}&id=${tou.tour_id}`} className='w-full'>
                        <TourInfo
                            tour={tou}
                        />
                    </Link>
                )) : Array.from({ length: 4 }, (_, index) =>
                    <Skeleton key={index} className='w-full md:h-[402px]' />
                )}
        </Grid>
    )
}

export default TourListContent