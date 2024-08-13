import React from 'react'
import Flex from '@/components/custom/flex'
import Link from 'next/link'
// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


function TourListAdminFilter() {
    return (
        <Flex justify='start' gap={3} className='h-24'>
            {/* <Select>
                <SelectTrigger icon className="w-[180px]">
                    <SelectValue placeholder="Sắp xếp" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger icon className="w-[180px]">
                    <SelectValue placeholder="Điểm đến" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger icon className="w-[180px]">
                    <SelectValue placeholder="Chỗ còn" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select> */}

            <Flex justify='end' className='w-full'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="tour/new"> <Plus className='text-maintext bg-white rounded h-8 w-8 p-1 justify-self-end' /></Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Creare new Tour</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Flex>

        </Flex>
    )
}

export default TourListAdminFilter