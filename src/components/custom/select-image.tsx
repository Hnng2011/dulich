/* eslint-disable react/react-in-jsx-scope */
import Modal from "@/components/custom/modal"
import { ScrollArea } from "../ui/scroll-area"
import { useState, memo, useEffect } from "react"
import Grid from "./grid"
import Image from "next/image"
import { Input } from "../ui/input"
import { Skeleton } from "../ui/skeleton"
import { useGetImagesStorage } from "@/api/get_data"
import { Button } from "../ui/button"

function SelectImage({ value, isOpen, closeModal, onChange }: { value: string[] | undefined, isOpen: boolean, closeModal: () => void, onChange: (value: string[]) => void; }) {
    const [selectImages, setSelectImages] = useState<string[]>([])
    const { data: images } = useGetImagesStorage()

    useEffect(() => {
        if (value) {
            setSelectImages(value)
        }
    }, [value])

    const handleChange = (img: string) => {
        let updatedImages = [...selectImages];
        if (selectImages.includes(img)) {
            updatedImages = updatedImages.filter(image => image !== img);
        } else {
            updatedImages.push(img);
        }
        setSelectImages(updatedImages);
    };

    const handleSelect = () => {
        if (value) {
            onChange(selectImages)
        }
        closeModal()
    }

    return (
        <>
            {images &&
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <div>
                        <ScrollArea className="h-[55vh] w-[40vw] pr-4">
                            <Grid template='col' count={4} gap={2}>
                                {images ? images.map((img) => (
                                    <div key={img.name} className='w-full relative aspect-square rounded overflow-hidden'>
                                        <label className="w-full h-full absolute top-0 left-0 z-10 cursor-pointer">
                                            <Input
                                                type="checkbox"
                                                checked={selectImages?.includes(typeof img.image_link === "string" ? img.image_link : img.image_link[0])}
                                                onChange={() => handleChange(typeof img.image_link === "string" ? img.image_link : img.image_link[0])}
                                                onClick={() => null}
                                                className={`h-6 w-6 absolute p-1 right-1 top-1 z-20 rounded-full bg-slate-200 shadow cursor-pointer duration-300 opacity-100 pointer-events-auto`}
                                            />
                                        </label>
                                        <Image sizes="200" fill src={img.image_link[0]} alt={img.name} />
                                    </div>
                                )) : Array.from({ length: 6 }, (_, index) =>
                                    <Skeleton key={index} className='w-full aspect-square' />
                                )}
                            </Grid>
                        </ScrollArea>
                    </div>
                    <Button type="button" onClick={() => handleSelect()}>Select</Button>
                </Modal >}
        </>
    )
}

export default memo(SelectImage)