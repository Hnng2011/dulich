'use client';

import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation'
import { SVGProps, useCallback, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTranslation, useLanguage } from "@/context/language_provider"
import useScroll from "@/hooks/use-scroll";
import './styles.css'


export default function Header() {
    const router = useRouter();
    const pathname = usePathname()
    // const process = useScroll();
    // const { language, updateLanguage } = useLanguage();
    // const [lang, setLang] = useState<string>(language);
    const t = useTranslation();

    // const handleValueChange = useCallback((value: string) => {
    //     setLang(value);
    //     updateLanguage(value);
    // }, []);

    return (
        <>
            {/* header navigate */}
            <header className="w-full h-20 fixed inset-x-1/2 z-10 top-3">
                <nav className="relative -translate-x-1/2 flex-center !justify-center items-center h-12 w-1/3 bg-marooncus/50 rounded-full overflow-hidden z-10 backdrop-blur-md">
                    <a
                        className="nav-item"
                        onClick={() => router.push('/')}
                    >
                        <p className="z-10">
                            {t?.header?.navigate?.home}
                        </p>
                    </a>
                    <a
                        className="nav-item"
                        onClick={() => router.push('about')}
                    >
                        <p className="z-10">
                            {t?.header?.navigate?.about}
                        </p>
                    </a>
                    <a
                        className="nav-item"
                    >
                        <p className="z-10">
                            {t?.header?.navigate?.contact}
                        </p>

                    </a>
                    <a
                        className="nav-item"
                    >
                        <p className="z-10">
                            {t?.header?.navigate?.contact}
                        </p>
                    </a>
                </nav>
            </header>
        </>
    )
}


