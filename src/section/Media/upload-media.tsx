/* eslint-disable react/react-in-jsx-scope */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, ChangeEvent } from "react"

const imageSchema = z.object({
    images: z.array(z.string()).min(1, "Bạn phải chọn ít nhất một ảnh."),
});

export function UploadMedia() {
    const [localImages, setLocalImages] = useState<File[]>([])
    const form = useForm<z.infer<typeof imageSchema>>({
        resolver: zodResolver(imageSchema),
        defaultValues: {
            images: [],
        },
    })

    function onSubmit(data: z.infer<typeof imageSchema>) {
        console.log(data)
        console.log(localImages)
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files: File[] = Array.from(e.target.files || []);
        setLocalImages(files)
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="images"
                    render={() => (
                        <FormItem className="flex items-center gap-2">
                            <FormControl className="max-w-sm">
                                <Input accept="image/png, image/gif, image/jpeg" type="file" multiple onChange={handleImageChange} />
                            </FormControl>
                            <Button type="submit" className="!m-0">Upload</Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
