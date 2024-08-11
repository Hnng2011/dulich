/* eslint-disable react/react-in-jsx-scope */
import Grid from "@/components/custom/grid"
import { X } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"



function ViewAllImages({ images, setImages }: { images: ImageSrc[] | undefined, setImages: Dispatch<SetStateAction<ImageSrc[] | undefined>> }) {
    const handleRemove = (url: string) => {
        console.log(url)
    }

    return (
        <Grid template='col' count={6} gap={2}>
            {
                images?.map((img, idx) => {
                    return (
                        <div key={idx} className='w-full relative aspect-square rounded overflow-hidden'>
                            <X onClick={() => handleRemove(img.image_link[0])} className='h-6 w-6 absolute p-1 right-1 top-1 z-10 rounded-full bg-slate-200 shadow cursor-pointer' />
                            <Image fill src={img.image_link[0]} alt={img.name} />
                        </div>
                    )   
                })
            }
        </Grid>
    )
}

export default ViewAllImages