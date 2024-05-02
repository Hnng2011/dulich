'use client'

import './styles.css';
import useScroll from '@/hooks/use-scroll';

export default function FirstHero() {
    const process = useScroll();

    return (
        <div className="mt-8 container sticky z-[-1] inset-6" style={{ transform: `scale(${1 - (process / (window.innerHeight * 4))})`, filter: `blur(${(process / window.innerHeight) * 4}px) grayscale(${(process / window.innerHeight)})` }}>
            <div className='w-full h-full relative bg-black'></div>
            <video className="ratio-169" controls={false} muted autoPlay loop>
                <source src="/assets/video/banner.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
        </div >
    )
}
