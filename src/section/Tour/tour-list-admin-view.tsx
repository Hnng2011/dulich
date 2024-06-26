import React from 'react'
import { Divider } from '@/components/custom/divider'
import TourListAdminContent from './TourList/tour-list-admin-content'
import { ScrollArea } from "@/components/ui/scroll-area"
import TourListAdminFilter from './TourList/tour-list-admin-filter'


const TourListAdmin = () => {
    return (
        <>
            <TourListAdminFilter />
            <Divider />
            <ScrollArea className='pt-3 h-[77vh]'>
                <TourListAdminContent />
            </ScrollArea>
        </>


    )
}

export default TourListAdmin