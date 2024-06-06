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
        let resizeHandler = () => {
            if (isFixed && container.current) {
                const screenWidth = window.innerWidth;
                const containerWidth = container.current.offsetWidth;
                if (containerWidth && screenWidth > containerWidth) {
                    setCenter((screenWidth - containerWidth) / 2); // Để căn giữa
                }
            }
        };

        window.addEventListener('resize', resizeHandler);
        resizeHandler();

        return () => window.removeEventListener('resize', resizeHandler);
    }, [isFixed]);

    return (
        <div ref={container} style={{ left: `${center}px` }} className={`${props.className} container w-full mx-auto`} >
            {props.children}
        </div>
    );
}
