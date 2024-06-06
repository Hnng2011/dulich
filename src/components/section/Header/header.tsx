'use client';

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useTranslation, useLanguage } from "@/context/language_provider"
import SearchIcon from "../../../../public/assets/icon/search";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import './styles.css'
import { useCallback, useState } from "react";
import Flex from "@/components/ui/flex";
import Container from "@/components/ui/container";


export default function Header() {
    const router = useRouter();
    // const process = useScroll();
    const { language, updateLanguage } = useLanguage();
    const t = useTranslation();

    const handleValueChange = useCallback((value: string) => {
        updateLanguage(value);
    }, [updateLanguage]);

    return (
        <>
            {
                t &&
                <Container className="bg-transparent z-20 fixed text-white text-lg font-spin">
                    <Flex className="w-full">
                        <Flex className="gap-8 h-20">
                            {
                                Object.keys(t.header.navigate).map((key, index) => (
                                    <Link href={""} key={index}>{t.header.navigate[key]}</Link>
                                ))
                            }
                        </Flex>
                        <Flex className="justify-end gap-8 h-20">
                            <Select value={language} onValueChange={handleValueChange}>
                                <SelectTrigger className="w-24 text-black">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="vn">VIET</SelectItem>
                                        <SelectItem value="en">MY</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <SearchIcon className="w-5 h-5" />
                        </Flex>
                    </Flex>
                </Container>
            }
        </>

    )
}


