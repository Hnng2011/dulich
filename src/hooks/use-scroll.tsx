'use client'

import { useEffect, useMemo, useState } from "react";

export default function useScroll(): boolean {
    const [process, setProcess] = useState<boolean>(typeof window !== 'undefined' ? window.scrollY > 0 ? true : false : false);

    useEffect(() => {
        const handleScroll = () => {
            setProcess(window.scrollY > 0 ? true : false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Use useMemo to return the memoized process value
    return useMemo(() => process, [process]);
}
