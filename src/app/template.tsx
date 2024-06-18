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

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const navigate = pathname.split('/')
    const { t } = useLanguage()

    return (
        <>
            <Header />
            {pathname !== '/' && t && <Container className="h-20 pt-40 pb-10">
                <Breadcrumb>
                    <BreadcrumbList className='text-xl'>
                        {
                            navigate.map((link, idx) => link === '' ?
                                <>
                                    <BreadcrumbItem key={link} className='text-muted-forground'>
                                        <BreadcrumbLink asChild>
                                            <Link href="/">{t?.header?.navigate?.home}</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem >
                                    <BreadcrumbSeparator />
                                </>
                                :
                                <>
                                    <BreadcrumbItem key={link} className={idx === navigate.length - 1 ? 'text-maintext' : 'text-muted-forground'}>
                                        <BreadcrumbLink asChild>
                                            <Link href={idx === navigate.length - 1 ? pathname : '/' + link}>{t?.header?.navigate?.[link] || extractPathname(link, 0)}</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {idx !== navigate.length - 1 && <BreadcrumbSeparator />}
                                </>
                            )
                        }
                    </BreadcrumbList >
                </Breadcrumb >
            </Container >}

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}