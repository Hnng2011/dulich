'use client'

import { useEffect, useMemo, useState } from "react";

export default function useScroll() {
    const [process, setProcess] = useState(typeof window !== 'undefined' ? window.scrollY : 0);

    useEffect(() => {
        const handleScroll = () => {
            setProcess(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);



        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Use useMemo to return the memoized process value
    return useMemo(() => process, [process]);
}
