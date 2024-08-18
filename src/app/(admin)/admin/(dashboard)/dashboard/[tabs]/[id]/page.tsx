'use client'

import React from "react";
import TourDetailAdminContent from "@/section/Tour/TourDetail/tour-detail-admin-content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";


export default function Tab({ params }: { params: { tabs: string, id: string } }) {
    const router = useRouter()
    return (
        <>
            <Button variant="default" className="my-6 bg-amber-500 hover:bg-amber-600" onClick={() => router.back()}>Quay về <Icon icon="lets-icons:back" width={20} height={20} className="ml-2" /></Button>
            <ScrollArea className="h-[80vh] mt-2">
                {params.tabs === 'tour' && <TourDetailAdminContent tour_id={params.id} />}
            </ScrollArea>
        </>

    )
}