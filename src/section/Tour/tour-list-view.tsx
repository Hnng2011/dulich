import React from 'react'
import { Divider } from '@/components/ui/divider'
import TourListFilter from './TourList/tour-list-filter'
import TourListContent from './TourList/tour-list-content'

const TourList = () => {


    return (
        <>
            <TourListFilter />
            <Divider />
            <TourListContent />
        </>


    )
}

export default TourList