import React from "react";
import TourDetailAdminContent from "@/section/Tour/TourDetail/tour-detail-admin-content";


export default function Tab({ params }: { params: { tabs: string, id: string } }) {
    return (
        <>
            {params.tabs === 'tour' && <TourDetailAdminContent tour_id={params.id} />}
        </>
    )
}