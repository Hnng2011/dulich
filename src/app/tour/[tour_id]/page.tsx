import TourDetail from "@/section/Tour/tour-detail";
import extractPathname from "@/utils/extract-uri"

export default function Page({ params }: { params: { tour_id: string } }) {
    const tourid = extractPathname(params.tour_id, 1)

    return (
        <TourDetail tour_id={tourid} />
    )
}