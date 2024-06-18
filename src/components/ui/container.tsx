'use client'

import { ReactNode, HTMLProps, useEffect, useRef, useState } from "react";

interface ContainerProp extends HTMLProps<HTMLDivElement> {
    children?: ReactNode;
    center?: boolean;
}

export default function Container(props: ContainerProp) {
    const container = useRef<HTMLDivElement>(null);
    const isFixed: boolean | undefined = props.className?.includes('fixed');
    const [center, setCenter] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const resizeHandler = () => {
                if (isFixed && container.current && (props.center || true)) {
                    const screenWidth = window.innerWidth;
                    const containerWidth = container.current.offsetWidth;
                    if (containerWidth && screenWidth > containerWidth) {
                        setCenter((screenWidth - containerWidth) / 2); // Center the container
                    }
                }
            };

            window.addEventListener('resize', resizeHandler);
            resizeHandler();

            return () => window.removeEventListener('resize', resizeHandler);
        }
    }, [isFixed, props.center]); // Only re-run the effect if isFixed changes

    return (
        <div ref={container} style={{ left: `${center}px` }} className={`${props.className} container w-full mx-auto`}>
            {props.children}
        </div>
    );
}
