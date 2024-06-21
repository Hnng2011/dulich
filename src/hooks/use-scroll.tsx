'use client'

import { useEffect, useState } from "react";

export default function useScroll(): boolean {
    const [process, setProcess] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setProcess(window.scrollY > 0 ? true : false);
        };

        handleScroll()

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return process
}
