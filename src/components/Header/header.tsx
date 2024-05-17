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
    // const pathname = usePathname()
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
            <header className="w-full h-20 fixed inset-0 z-10">
                <div className="w-full h-4 bg-marooncus"></div>

                <nav className="flex-center ml-[65%] items-center gap-6 bg-marooncus h-16 relative px-12 z-10 w-1/4 rounded-b-3xl">
                    <a
                        className="nav-item px-2 before:bg-white text-white"
                        onClick={() => router.push('/')}
                    >
                        {t?.header?.navigate?.home}
                    </a>
                    <a
                        className="nav-item px-2 before:bg-white text-white"
                        onClick={() => router.push('about')}
                    >
                        {t?.header?.navigate?.about}
                    </a>
                    <a
                        className="nav-item px-2 before:bg-white text-white"
                    >
                        {t?.header?.navigate?.contact}
                    </a>

                    <div className="h-[20px] w-[20px]  absolute inset-0 translate-x-[-100%] rounded-full shadow-[20px_-20px_0_10px_rgba(128,61,59,1)] bg-transparent"></div>
                    <div className="h-[20px] w-[20px]  absolute inset-0 left-full rounded-full shadow-[-20px_-20px_0_10px_rgba(128,61,59,1)] bg-transparent"></div>
                </nav>


            </header>
        </>
    )
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

function LocateIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    )
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

function VnIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="800px" height="800px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_503_2795)">
                <rect width="28" height="20" rx="2" fill="white" />
                <mask id="mask0_503_2795" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                    <rect width="28" height="20" rx="2" fill="white" />
                </mask>
                <g mask="url(#mask0_503_2795)">
                    <rect width="28" height="20" fill="#EA403F" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 12.34L10.4733 14.8541L11.7745 10.7231L8.29366 8.1459L12.6246 8.1069L14 4L15.3754 8.1069L19.7063 8.1459L16.2255 10.7231L17.5267 14.8541L14 12.34Z" fill="#FFFE4E" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_503_2795">
                    <rect width="28" height="20" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}


function EnIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="800px" height="800px" viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_503_2952)">
                <rect width="28" height="20" rx="2" fill="white" />
                <mask id="mask0_503_2952" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                    <rect width="28" height="20" rx="2" fill="white" />
                </mask>
                <g mask="url(#mask0_503_2952)">
                    <rect width="28" height="20" fill="#0A17A7" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M-1.28244 -1.91644L10.6667 6.14335V-1.33333H17.3334V6.14335L29.2825 -1.91644L30.7737 0.294324L21.3263 6.66667H28V13.3333H21.3263L30.7737 19.7057L29.2825 21.9165L17.3334 13.8567V21.3333H10.6667V13.8567L-1.28244 21.9165L-2.77362 19.7057L6.67377 13.3333H2.95639e-05V6.66667H6.67377L-2.77362 0.294324L-1.28244 -1.91644Z" fill="white" />
                    <path d="M18.668 6.33219L31.3333 -2" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round" />
                    <path d="M20.0128 13.6975L31.3666 21.3503" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round" />
                    <path d="M8.00555 6.31046L-3.83746 -1.67099" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round" />
                    <path d="M9.29006 13.6049L-3.83746 22.3105" stroke="#DB1F35" stroke-width="0.666667" stroke-linecap="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12H12V20H16V12H28V8H16V0H12V8H0V12Z" fill="#E6273E" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_503_2952">
                    <rect width="28" height="20" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

