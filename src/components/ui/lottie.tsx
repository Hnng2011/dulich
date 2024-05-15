'use client'

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData, className, loop = true, autoplay = true }: { animationData: object, className: string, loop: boolean, autoplay: boolean }) => {
    const animationContainer = useRef(null);
    const animationInstance = useRef(null);

    useEffect(() => {
        if (animationContainer.current) {
            animationInstance.current = lottie.loadAnimation({
                container: animationContainer.current,
                renderer: 'svg',
                loop,
                autoplay,
                animationData
            });

            return () => animationInstance.current?.destroy();
        }
    }, [animationData, loop, autoplay]);

    return <div ref={animationContainer} className={className} />;
};

export default LottieAnimation;
