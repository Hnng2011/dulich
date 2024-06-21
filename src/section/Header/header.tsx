'use client';

import React from "react"
import Link from "next/link"
import Logo from "../../../public/assets/logo/logo"
import { usePathname } from 'next/navigation'
import { useLanguage } from "@/context/language_provider"
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
import { useCallback, useReducer } from "react";
import Flex from "@/components/ui/flex";
import Container from "@/components/ui/container";
import useScroll from "@/hooks/use-scroll";
import VN from '../../../public/assets/icon/vn'
import US from '../../../public/assets/icon/us'
import { Menu, X } from "lucide-react";
import { HREFS } from "@/constant/navigation";
import { Input } from "@/components/ui/input"

type State = {
    menuOpen: boolean;
    searchOpen: boolean;
};

type Action = 'TOGGLE_MENU' | 'TOGGLE_SEARCH';

function reducer(state: State, action: Action): State {
    switch (action) {
        case 'TOGGLE_MENU':
            return { ...state, menuOpen: !state.menuOpen };
        case 'TOGGLE_SEARCH':
            return { ...state, searchOpen: !state.searchOpen };
        default:
            return state;
    }
}

export default function Header() {
    const [state, dispatch] = useReducer(reducer, { menuOpen: false, searchOpen: false });
    const pathname = usePathname()
    const process = useScroll();
    const { language, updateLanguage, t } = useLanguage();

    const handleValueChange = useCallback((value: 'vn' | 'en') => {
        updateLanguage(value);
    }, [updateLanguage]);

    return (
        <>
            {
                <Flex justify="center" className={`fixed w-full bg-transparent z-20 ${pathname === '/' && 'text-white'} ${process && '!text-maintext'} text-base md:text-lg font-spin  ${pathname !== '/' || process ? 'before:translate-y-0' : 'before:-translate-y-full'} before:hidden lg:before:flex  before:h-20 before:duration-300 before:fixed before:inset-0 before:w-full before:bg-subbackground before:z-20`}>
                    <Container>
                        {t && <Flex align="start" className={`w-full h-20 z-20 relative hidden lg:flex`}>
                            <Flex gap={8} align="start" className="h-full">
                                <Logo className={`h-${20 + 12}`} />
                                <Flex gap={8} className='h-full'>
                                    {
                                        Object.keys(t?.header.navigate).map((key, index) => (
                                            <Link href={HREFS.header?.[key] ?? ''} key={index} className={`${process ? 'hover:text-mainbackground' : 'hover:text-subtext'} whitespace-nowrap`}>{t.header.navigate[key]}</Link>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                            <Flex className="justify-end gap-8 h-full flex-nowrap">
                                <Flex justify="end" onMouseEnter={() => dispatch('TOGGLE_SEARCH')} onMouseLeave={() => dispatch('TOGGLE_SEARCH')} gap={2}>
                                    <Input className={`!h-10 ${state.searchOpen ? '' : 'w-0 p-0'} duration-300 max-w-lg bg-transparent border-0 border-b-2 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 ${process && '!border-maintext'}`} type="text" placeholder="Search" />
                                    <SearchIcon className="w-5 h-5 shrink-0" />
                                </Flex>
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
                            </Flex>
                        </Flex>
                        }
                    </Container >
                </Flex>
            }
            {
                <>
                    <Menu onClick={() => dispatch('TOGGLE_MENU')} className={`fixed bg-maintext text-mainbackground rounded right-6 top-6 h-8 w-8 z-30 lg:hidden duration-300 ${state.menuOpen && 'hidden'}`} />
                    <X onClick={() => dispatch('TOGGLE_MENU')} className={`fixed bg:subbackground text-maintext rounded right-6 top-6 h-8 w-8 z-30 lg:hidden duration-300 ${!state.menuOpen && 'hidden'}`} />
                    <Container className={`fixed h-full z-20 text-maintext text-base font-spin lg:hidden bg-subbackground duration-300 ${!state.menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <Flex gap={8} align="center" justify="center" col className="w-full h-full  z-20 relative">
                            <Flex gap={8} align="center" col>
                                <Logo className="h-32 w-32" />
                                <Flex gap={8} col className="h-full">
                                    {
                                        t && Object.keys(t.header.navigate).map((key, index) => (
                                            <Link onClick={() => dispatch('TOGGLE_MENU')} href={HREFS.header?.[key] ?? ''} key={index} className={`${process ? 'hover:text-mainbackground' : 'hover:text-subtext'} whitespace-nowrap`}>{t.header.navigate[key]}</Link>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                            <Flex col className="justify-end gap-8">
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
                                <SearchIcon onMouseEnter={() => dispatch('TOGGLE_SEARCH')} onMouseLeave={() => dispatch('TOGGLE_SEARCH')} className="w-5 h-5" />
                            </Flex>
                        </Flex>
                    </Container>
                </>

            }
        </>

    )
}


