/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useGetTours } from '@/api/get_data'
import TourInfoAdmin from '@/components/custom/tour-admin'
import Grid from '@/components/custom/grid'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'


function TourListAdminContent() {
    const { data } = useGetTours()
    return (
        <Grid template='col' count={1} gap={2} className="grid-cols-2 xl:grid-cols-3" >
            {data ?
                data.map((tou, index) => (
                    <TourInfoAdmin
                        key={index}
                        tour={tou}
                    />
                )) : Array.from({ length: 9 }, (_, index) =>
                    <Skeleton key={index} className='w-full md:h-[198px]' />
                )}
        </Grid>
    )
}

export default TourListAdminContent