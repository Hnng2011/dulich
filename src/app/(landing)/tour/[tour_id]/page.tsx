import React from "react";
import TourDetail from "@/section/Tour/tour-detail-view";
import { extractPathname } from "@/lib/utils"
import Container from "@/components/custom/container";

export default function Page({ params }: { params: { tour_id: string } }) {
    const tourid = extractPathname(params.tour_id, 1)

    return (
        <Container className='min-h-[715px]'>
            <TourDetail tour_id={tourid} />
        </Container>
    )
}
