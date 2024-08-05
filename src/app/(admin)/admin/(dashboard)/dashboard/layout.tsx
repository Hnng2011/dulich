'use client'

import React from "react"
import Link from "next/link"
import Container from "@/components/custom/container"
import Flex from "@/components/custom/flex"
import { usePathname } from "next/navigation"
import './style.css'

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname()

    return (
        <div className="w-full bg-zinc-800 custom-bg">
            <Container>
                <Flex align="start">
                    <Flex className="min-h-screen shrink-0">
                        <Flex justify="start" gap={3} col className="min-h-[95vh] p-4 w-full bg-zinc-900 bg-opacity-70 rounded backdrop-blur-md">
                            <Link href={'/admin/dashboard/overview'} className={`${pathName.startsWith('/admin/dashboard/overview') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Tổng quan</Link>
                            <Link href={'/admin/dashboard/tour'} className={`${pathName.startsWith('/admin/dashboard/tour') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Tour</Link>
                            <Link href={'/admin/dashboard/blog'} className={`${pathName.startsWith('/admin/dashboard/blog') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Blog</Link>
                            <Link href={'/admin/dashboard/media'} className={`${pathName.startsWith('/admin/dashboard/media') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Storage</Link>
                        </Flex>
                    </Flex>
                    <Flex className="w-full min-h-screen">
                        <Container className="m-4 min-h-[95vh] bg-subbackground rounded bg-opacity-30 backdrop-blur-md">
                            {children}
                        </Container>
                    </Flex>
                </Flex>

            </Container>
        </div >
    )
}