'use client';

import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useTranslation, useLanguage } from "@/context/language_provider"
import SearchIcon from "../../../public/assets/icon/search";
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
import useScroll from "@/hooks/use-scroll";
import VN from '../../../public/assets/icon/vn'
import US from '../../../public/assets/icon/us'


export default function Header() {
    const router = useRouter();
    const process = useScroll();
    const { language, updateLanguage } = useLanguage();
    const t = useTranslation();

    const handleValueChange = useCallback((value: string) => {
        updateLanguage(value);
    }, [updateLanguage]);

    return (
        <>
            {
                t &&
                <Container className={`bg-transparent z-20 fixed text-white ${process && '!text-maintext'} text-lg font-spin ${process && 'before:translate-y-0'}  before:h-20 before:-translate-y-full before:duration-300 before:fixed before:inset-0 before:w-full before:bg-subbackground before:z-20`}>
                    <Flex className="w-full z-20 relative">
                        <Flex className="gap-8 h-20">
                            {
                                Object.keys(t.header.navigate).map((key, index) => (
                                    <Link href={""} key={index} className={`${process ? 'hover:text-mainbackground' : 'hover:text-subtext'}`}>{t.header.navigate[key]}</Link>
                                ))
                            }
                        </Flex>
                        <Flex className="justify-end gap-8 h-20">
                            <Select value={language} onValueChange={handleValueChange}>
                                <SelectTrigger className="w-13 text-maintext">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="vn"><VN /></SelectItem>
                                        <SelectItem value="en"><US /></SelectItem>
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


