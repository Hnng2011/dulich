import React from 'react'
// import { Divider } from '@/components/custom/divider'
// import TourListFilter from './TourList/tour-list-filter'
import TourListContent from './TourList/tour-list-content'

const TourList = () => {
    return (
        <>
            {/* <TourListFilter />
            <Divider /> */}
            <h2 className='text-subtext text-3xl font-bold my-6'>Tất cả Tour</h2>
            <TourListContent />
        </>


    )
}

export default TourList