import React from "react";
import TourDetailAdminContent from "@/section/Tour/TourDetail/tour-detail-admin-content";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Tab({ params }: { params: { tabs: string, id: string } }) {
    return (
        <ScrollArea className="h-[88vh] my-6">
            {params.tabs === 'tour' && <TourDetailAdminContent tour_id={params.id} />}
        </ScrollArea>
    )
}