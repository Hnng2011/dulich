'use client'

import React from "react"
import Link from "next/link"
import Header from "@/section/Header/header"
import Footer from "@/section/Footer/footer"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"
import Container from "@/components/ui/container"
import { useLanguage } from "@/context/language_provider"
import extractPathname from "@/utils/extract-uri"
import { cn } from "@/lib/utils"

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const navigate = pathname.split('/')
    const { t } = useLanguage()

    return (
        <>
            <Header />
            {pathname !== '/' && <Container className="h-20 pt-6 md:pt-40 pb-10">
                {t && <Breadcrumb>
                    <BreadcrumbList className='text-xl'>
                        {
                            navigate.map((link, idx) => link === '' ?
                                <>
                                    <BreadcrumbItem key={link} className='text-muted-forground text-base'>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">{t?.header?.navigate?.home}</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem >
                                    <BreadcrumbSeparator />
                                </>
                                :
                                <>
                                    <BreadcrumbItem key={link} className={cn(idx === navigate.length - 1 ? 'text-maintext' : 'text-muted-forground', 'text-base capitalize')}>
                                        <BreadcrumbLink asChild>
                                            <Link href={idx === navigate.length - 1 ? pathname : '/' + link}>{t?.header?.navigate?.[link] || extractPathname(link, 0)}</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {idx !== navigate.length - 1 && <BreadcrumbSeparator />}
                                </>
                            )
                        }
                    </BreadcrumbList >
                </Breadcrumb >}
            </Container >
            }

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}