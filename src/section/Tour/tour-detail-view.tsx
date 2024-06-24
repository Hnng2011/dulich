import React from 'react'
import TourDetailContent from './TourDetail/tour-detail-content'

const TourDetail = ({ tour_id }: { tour_id: string }) => {
    return <TourDetailContent tour_id={tour_id} />
}

export default TourDetail