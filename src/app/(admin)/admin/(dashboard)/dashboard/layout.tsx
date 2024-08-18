'use client'

import React from "react"
import Link from "next/link"
import Container from "@/components/custom/container"
import Flex from "@/components/custom/flex"
import { usePathname } from "next/navigation"
import './style.css'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { SWRConfig } from "swr"


function deleteCookie(name: string) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname()

    const signOut = (name: string) => {
        deleteCookie(name)
        window.location.reload()
    }

    return (
        <SWRConfig value={{
            refreshInterval: 60000,
        }}>
            <div className="w-full bg-zinc-800 custom-bg">
                <Container>
                    <Flex align="start">
                        <Flex className="min-h-screen shrink-0">
                            <Flex justify="start" gap={3} iscol className="min-h-[95vh] p-4 w-full bg-zinc-900 bg-opacity-70 rounded backdrop-blur-md">
                                {/* <Link href={'/admin/dashboard/overview'} className={`${pathName.startsWith('/admin/dashboard/overview') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Tổng quan</Link> */}
                                <Link href={'/admin/dashboard/tour'} className={`${pathName.startsWith('/admin/dashboard/tour') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Tour</Link>
                                {/* <Link href={'/admin/dashboard/blog'} className={`${pathName.startsWith('/admin/dashboard/blog') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Blog</Link> */}
                                <Link href={'/admin/dashboard/media'} className={`${pathName.startsWith('/admin/dashboard/media') ? "bg-zinc-400 text-mainbackground bg-opacity-70" : "bg-white"}  w-full text-center px-12 py-4 rounded duration-300`}>Kho ảnh</Link>
                                <AlertDialog>
                                    <AlertDialogTrigger className="bg-red-700 w-full text-center px-12 py-2 rounded duration-300 hover:bg-red-900 text-white">Đăng Xuất</AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Chắc chắn muốn đăng xuất?</AlertDialogTitle>
                                            {/* <AlertDialogDescription>

                                        </AlertDialogDescription> */}
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Hủy</AlertDialogCancel>
                                            <AlertDialogAction className="text-white bg-red-700 hover:bg-red-900" onClick={() => signOut("token")}>Đồng ý</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
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
        </SWRConfig>
    )
}