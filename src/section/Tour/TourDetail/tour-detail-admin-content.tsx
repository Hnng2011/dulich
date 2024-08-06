'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Container from '@/components/custom/container'
import Flex from '@/components/custom/flex'
import Grid from '@/components/custom/grid'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { X, CalendarIcon } from 'lucide-react'
import { useGetTour } from '@/api/get_data'
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import Editor from '@/components/ui/editor'

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
    standard: z.enum(["Luxury", "Standard", "Premium"], {
        required_error: "You need to select a standard type.",
    }),
    start_date: z.date(),
    destination: z.string(),
    schedule: z.string(),
})



const TourDetailAdminContent = ({ tour_id }: { tour_id: string }) => {
    const { data } = useGetTour(tour_id)
    const pathname = usePathname()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            detail: "",
            image_link: [],
            price_before_discount: 0,
            price_after_discount: 0,
            slot: 0,
            standard: 'Standard',
            start_date: undefined,
            destination: '',
            schedule: '',
        },
    })

    const formValue = form.watch()

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
                start_date: new Date(data.start_date),
                destination: data.destination,
                schedule: "Hello",
            })
        }
    }, [data]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (tour_id) {
                await fetch(`${pathname}/api`, {
                    method: "PATCH",
                    body: JSON.stringify({ info: values })
                })
            } else {
                await fetch(`${pathname}/api`, {
                    method: "POST",
                    body: JSON.stringify({ info: values })
                })
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    function handleRemove(url: string) {
        form.setValue('image_link', formValue.image_link.filter((link: string) => link !== url))
    }

    return (
        <Container className='p-0 pr-10'>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <Flex gap={8} col className='basis-1/2 min-h-[200px]'>
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel className='text-white font-medium text-lg'>Tiêu đề</FormLabel>
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
                                    <FormLabel className='text-white font-medium text-lg'>Mô tả</FormLabel>
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

                        <Flex justify='start' gap={4} className='w-full'>
                            <FormField
                                control={form.control}
                                name="start_date"
                                render={({ field }) => (
                                    <FormItem className="basis-1/2 flex flex-col">
                                        <FormLabel className='text-white font-medium text-lg'>Ngày khới hành</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="destination"
                                render={({ field }) => (
                                    <FormItem className='basis-1/2'>
                                        <FormLabel className='text-white text-lg font-medium'>Điểm đến</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Chọn điểm đến" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="0">Đức</SelectItem>
                                                <SelectItem value="1">Ý</SelectItem>
                                                <SelectItem value="2">Nhật</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </Flex>


                        <Flex align='start' gap={4} className='w-full'>
                            <FormField
                                control={form.control}
                                name="standard"
                                render={({ field }) => (
                                    <FormItem className='basis-1/2 '>
                                        <FormLabel className='text-white font-medium text-lg'>Hạng</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="flex flex-wrap gap-6 pt-2"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Standard" className='text-subbackground' />
                                                    </FormControl>
                                                    <FormLabel className="font-normal text-subbackground">
                                                        Tiêu chuẩn
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Premium" className='text-subbackground' />
                                                    </FormControl>
                                                    <FormLabel className="font-normal text-subbackground">
                                                        Cao cấp
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="Luxury" className='text-subbackground' />
                                                    </FormControl>
                                                    <FormLabel className="font-normal text-subbackground">Xa Xỉ</FormLabel>
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
                                    <FormItem className='basis-1/2'>
                                        <FormLabel className='text-white font-medium text-lg'>Số lượng khách</FormLabel>
                                        <FormControl>
                                            <Input type='number' placeholder="0" {...field} value={field.value || undefined} onChange={e => field.onChange(Number(e.target.value))} />
                                        </FormControl>
                                        <FormDescription >
                                            {field.value} Khách
                                        </FormDescription>
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
                                    <FormItem className='basis-1/2'>
                                        <FormLabel className='text-white font-medium text-lg'>Giá</FormLabel>
                                        <FormControl>
                                            <Input type='number' placeholder="0" {...field} value={field.value || undefined} onChange={e => field.onChange(Number(e.target.value))} />
                                        </FormControl>
                                        <FormDescription >
                                            {field.value} VND
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price_after_discount"
                                render={({ field }) => (
                                    <FormItem className='basis-1/2'>
                                        <FormLabel className='text-white font-medium text-lg'>Giá khuyến mãi</FormLabel>
                                        <FormControl>
                                            <Input type='number' placeholder="0" {...field} value={field.value || undefined} onChange={e => field.onChange(Number(e.target.value))} />
                                        </FormControl>
                                        <FormDescription >
                                            {field.value} VND
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </Flex>
                    </Flex>

                    <FormField
                        control={form.control}
                        name="image_link"
                        render={() => (
                            <FormItem className='w-full'>
                                <FormLabel className='text-white font-medium text-lg'>Ảnh dại diện</FormLabel>
                                <FormControl>

                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Grid template='col' count={6} gap={3} className='gap-2 w-full'>
                        {formValue.image_link?.map((url: string, idx: number) =>
                            <Container key={idx} className='relative w-full aspect-square rounded overflow-hidden'>
                                <X onClick={() => handleRemove(url)} className='h-6 w-6 absolute p-1 right-1 top-1 z-10 rounded-full bg-slate-200 shadow cursor-pointer' />
                                <Image alt="up-img" src={url} fill />
                            </Container>
                        )}
                        {
                            formValue.image_link.length < 1 && <span className='w-full col-span-2 text-red-800'>Không có ảnh được chọn</span>
                        }
                    </Grid>

                    <FormField
                        control={form.control}
                        name="schedule"
                        render={({ field }) => (
                            <FormItem className='basis-1/2 h-fit'>
                                <FormLabel className='text-white font-medium text-lg'>Nội dung Tour</FormLabel>
                                <FormControl>
                                    <Editor value={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">{data ? 'Cập nhật' : 'Tạo'}</Button>
                </form>
            </Form>
        </Container >
    )
}

export default TourDetailAdminContent