'use client'

import { ReactNode, useEffect, useRef, useState } from "react";

interface FlexProp {
    children?: ReactNode,
    className?: string
}

export default function Container(props: FlexProp) {
    const container = useRef<HTMLDivElement>(null);
    const isFixed: boolean | undefined = props.className?.includes('fixed');
    const [center, setCenter] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') { // Ensure window is defined
            const resizeHandler = () => {
                if (isFixed && container.current) {
                    const screenWidth = window.innerWidth;
                    const containerWidth = container.current.offsetWidth;
                    if (containerWidth && screenWidth > containerWidth) {
                        setCenter((screenWidth - containerWidth) / 2); // Center the container
                    }
                }
            };

            window.addEventListener('resize', resizeHandler);
            resizeHandler(); // Trigger initially to set the correct position

            return () => window.removeEventListener('resize', resizeHandler);
        }
    }, [isFixed]); // Only re-run the effect if isFixed changes

    return (
        <div ref={container} style={{ left: `${center}px` }} className={`${props.className} container w-full mx-auto`}>
            {props.children}
        </div>
    );
}
