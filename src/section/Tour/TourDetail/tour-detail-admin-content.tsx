'use client'

import React, { useEffect } from 'react'
import Container from '@/components/custom/container'
import Flex from '@/components/custom/flex'
import { useGetTour } from '@/api/get_data'
// import { convertToLocalDate } from '@/lib/utils'
// import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const formSchema = z.object({
    title: z.string({
    }).min(1, { message: "Title is required" }).max(50, { message: "Title is too long" }),
    detail: z.string({
        required_error: "Detail is required",
    }).min(1, { message: "Detail is required" }).max(150, { message: "Detail is too long" }),
    image_link: z.any(),
    price_before_discount: z.number({ invalid_type_error: "Price must be a number" }).int().gte(1, { message: "Price is required" }),
    price_after_discount: z.number({ invalid_type_error: "Price discount must be a number" }).int() || z.undefined(),
    slot: z.number({ required_error: "Slot is required" }).int().gte(1, { message: "Price is required" }),
    standard: z.enum(["Luxury", "Standard"], {
        required_error: "You need to select a standard type.",
    }),
})

const TourDetailAdminContent = ({ tour_id }: { tour_id: string }) => {
    const { data } = useGetTour(tour_id)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: data?.title || "",
            detail: data?.detail || "",
            image_link: data?.image_link || [],
            price_before_discount: data?.price_before_discount || 0,
            price_after_discount: data?.price_after_discount || 0,
            slot: data?.slot || 0,
            standard: data?.standard || 'Standard',
        },
    })

    useEffect(() => {
        if (data) {
            form.reset({
                title: data.title,
                detail: data.detail,
                image_link: data.image_link,
                price_before_discount: data.price_before_discount,
                price_after_discount: data.price_after_discount,
                slot: data.slot,
                standard: data.standard,
            });
        }

    }, [data]);

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Container className='py-6'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Flex gap={6} align='start'>
                        <Flex gap={8} col className='basis-1/2 min-h-[200px]'>
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel className='text-white'>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Amazing tour" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="detail"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel className='text-white'>Detail</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe your tour"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Flex align='start' gap={4} className='w-full'>
                                <FormField
                                    control={form.control}
                                    name="standard"
                                    render={({ field }) => (
                                        <FormItem className='w-full text-white'>
                                            <FormLabel>Tour standard</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                    className="flex gap-6 pt-2"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Standard" className='text-subbackground' />
                                                        </FormControl>
                                                        <FormLabel className="font-normal text-subbackground">
                                                            Standard
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="Luxury" className='text-subbackground' />
                                                        </FormControl>
                                                        <FormLabel className="font-normal text-subbackground">Luxury</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="slot"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel className='text-white'>Slot</FormLabel>
                                            <FormControl>
                                                <Input type='number' placeholder="0" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </Flex>

                            <Flex align='start' gap={4} className='w-full'>
                                <FormField
                                    control={form.control}
                                    name="price_before_discount"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel className='text-white'>Price</FormLabel>
                                            <FormControl>
                                                <Input type='number' placeholder="0" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="price_after_discount"
                                    render={({ field }) => (
                                        <FormItem className='w-full'>
                                            <FormLabel className='text-white'>Sale Price</FormLabel>
                                            <FormControl>
                                                <Input type='number' placeholder="0" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </Flex>
                        </Flex>
                        <Container className='basis-1/2  min-h-[400px]' >
                            <FormField
                                control={form.control}
                                name="image_link"
                                render={({ field }) => (
                                    <FormItem className='w-full'>
                                        <FormLabel className='text-white'>Image links</FormLabel>
                                        <FormControl>
                                            <Input type='file' multiple  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </Container>
                    </Flex>
                    <Button type="submit">{data ? 'Update' : 'Create'}</Button>
                </form>
            </Form>
        </Container >
    )
}

export default TourDetailAdminContent