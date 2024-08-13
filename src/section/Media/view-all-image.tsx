/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@/components/custom/grid"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useCallback, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import Flex from "@/components/custom/flex"
import { Icon } from "@iconify/react"
import React from "react"

interface ViewAllImagesProps {
    images: ImageSrc[] | undefined;
    refreshData: () => void;
}

const ViewAllImages = ({ images, refreshData }: ViewAllImagesProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isDelete, setDelete] = useState<boolean>(false);
    const [deleteImages, setDeleteImages] = useState<ImageSrc[]>([]);
    const pathname = usePathname();

    const handleAddDeleteImages = useCallback((imgSrc: ImageSrc) => {
        setDeleteImages((prev) => {
            const index = prev.findIndex((img) => img.name === imgSrc.name);
            if (index > -1) {
                return prev.filter((img) => img.name !== imgSrc.name);
            } else {
                return [...prev, { ...imgSrc, option: 'delete' }];
            }
        });
    }, [images]);

    const handleRemove = useCallback(async () => {
        setLoading(true);
        try {
            await fetch(`${pathname}/api`, {
                method: "POST",
                body: JSON.stringify({ type: "update", images: deleteImages })
            });
            refreshData();
            resetDeleteState();
        } catch (e) {
            console.error(e);
            resetDeleteState();
        } finally {
            setLoading(false);
        }
    }, [deleteImages]);

    const resetDeleteState = useCallback(() => {
        setDelete(false);
        setDeleteImages([]);
    }, []);

    return (
        <>
            {images && !isDelete && (
                <Button
                    variant="destructive"
                    onClick={() => setDelete(true)}
                    className="bg-amber-500 hover:bg-amber-600"
                >
                    Delete Images
                </Button>
            )}
            {images && isDelete && (
                <Flex gap={2} justify="start">
                    <Button
                        disabled={deleteImages.length < 1 || loading}
                        variant="destructive"
                        onClick={handleRemove}
                    >
                        {loading ? (
                            <Icon icon="line-md:loading-loop" width={25} height={25} />
                        ) : (
                            "Delete"
                        )}
                    </Button>
                    <Button
                        variant="outline"
                        onClick={resetDeleteState}
                        className="bg-transparent border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white"
                    >
                        Cancel
                    </Button>
                </Flex>
            )}

            <ScrollArea className="h-[78vh] my-6 pr-6">
                <Grid template='col' count={6} gap={2}>
                    {images?.map((img) => (
                        <div key={img.name} className='w-full relative aspect-square rounded overflow-hidden'>
                            {isDelete && (
                                <label className="w-full h-full absolute top-0 left-0 z-10 cursor-pointer">
                                    <Input
                                        type="checkbox"
                                        onClick={() => handleAddDeleteImages(img)}
                                        className={`h-6 w-6 absolute p-1 right-1 top-1 z-20 rounded-full bg-slate-200 shadow cursor-pointer duration-300 ${isDelete ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                                    />
                                </label>
                            )}
                            <Image sizes="200" fill src={img.image_link[0]} alt={img.name} />
                        </div>
                    ))}
                </Grid>
            </ScrollArea>
        </>
    );
};

export default React.memo(ViewAllImages);