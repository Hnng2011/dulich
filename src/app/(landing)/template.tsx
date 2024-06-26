'use client'

import React from "react"
import { useLanguage } from "@/context/language_provider"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Container from "@/components/custom/container"
import Flex from "@/components/custom/flex"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { extractPathname } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const navigate = pathname.split('/')
    const { t } = useLanguage()

    return (
        <>
            {pathname !== '/' && <Container className="h-40 pt-6 md:pt-40 pb-10">
                {t && <Breadcrumb>
                    <BreadcrumbList className='text-xl'>
                        {
                            navigate.map((link, idx) => link === '' ?
                                <Flex gap={2} key={link}>
                                    <BreadcrumbItem className='text-muted-forground text-base'>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">{t?.header?.navigate?.home}</Link>
                                        </BreadcrumbLink>

                                    </BreadcrumbItem >
                                    <BreadcrumbSeparator />
                                </Flex>
                                :
                                <Flex gap={2} key={link}>
                                    <BreadcrumbItem key={link} className={cn(idx === navigate.length - 1 ? 'text-maintext' : 'text-muted-forground', 'text-base capitalize')}>
                                        <BreadcrumbLink asChild>
                                            <Link href={idx === navigate.length - 1 ? pathname : '/' + link}>{t?.header?.navigate?.[link] || extractPathname(link, 0)}</Link>
                                        </BreadcrumbLink>

                                    </BreadcrumbItem>
                                    {idx !== navigate.length - 1 && <BreadcrumbSeparator />}

                                </Flex>
                            )
                        }
                    </BreadcrumbList >
                </Breadcrumb >}
            </Container >
            }

            {children}
        </>
    )
}