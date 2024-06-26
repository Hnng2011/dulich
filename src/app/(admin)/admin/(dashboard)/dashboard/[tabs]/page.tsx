import React from "react";
import Overview from "@/section/Overview/overview";
import TourListAdmin from "@/section/Tour/tour-list-admin-view";

export default function Tab({ params }: { params: { tabs: string } }) {
    return (
        <>
            {params.tabs === 'overview' && <Overview />}
            {params.tabs === 'tour' && <TourListAdmin />}
        </>
    )
}