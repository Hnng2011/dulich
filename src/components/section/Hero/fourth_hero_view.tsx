import './styles.css';
import FourthHeroImage from './FourthHero/fourth_hero_image';
import { SVGProps } from 'react';


function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

const source = [
    {
        src: '/assets/img/test1.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: 1000000,
    },
    {
        src: '/assets/img/banner/thuyen.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: 100000000,
    }, {
        src: '/assets/img/banner/bien.jpg',
        title: 'Bình Định',
        price: 2300000,
    },
]

export default function FourthdHero() {
    return (
        <div className='w-screen items-center py-16'>
            <div className='flex-center container items-start -skew-x-6'>
                <h2 className='uppercase text-blackcus text-6xl font-black text-opacity-95 '>Tour Hàn</h2>
                <p className='w-1/3 text-sm text-right text-gray-400'>Khám phá xứ Hàn lộng lẫy , đầy hoa lệ và hiện đại - thành phố phát triển bậc nhất châu Á</p>
            </div>
            <div className={`container grid grid-cols-4 gap-10 place-items-start mt-6 `}>
                {source.map((item, index) => {
                    return <FourthHeroImage key={index} src={item.src} title={item.title} price={item.price} />
                })}
                <div className='relative w-full h-full flex items-center justify-center text-2xl text-marooncus px-2 '>
                    <div className='relative p-2 mx-auto flex items-center before:w-0 before:absolute hover:before:w-full before:h-[2px] before:right-0 hover:before:left-0 before:bottom-0 before:bg-marooncus before:-translate-x-2 cursor-pointer before:duration-200'>
                        <div>Xem Thêm</div>
                        <ArrowRightIcon className='ml-2' />
                    </div>
                </div>
            </div>
        </div >
    );
}
