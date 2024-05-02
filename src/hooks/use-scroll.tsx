'use client'

import { useEffect, useMemo, useState } from "react";

export default function useScroll() {
    const [process, setProcess] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setProcess(window.scrollY);
        });

        return () => {
            window.removeEventListener('scroll', () => { });
        }
    }, []);

    return useMemo(() => process, [process]);
}