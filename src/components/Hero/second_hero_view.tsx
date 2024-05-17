import './styles.css';
import SecondHeroImage from './SecondHero/second_hero_image';

const source = [
    {
        src: '/assets/img/test1.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: "1,000,000",
    },
    {
        src: '/assets/img/banner/thuyen.jpg',
        title: 'Du lịch Bình Thuận - Phan Thiết ( 10 ngày - 9 đêm)',
        price: "1,000,000",
    }, {
        src: '/assets/img/banner/bien.jpg',
        title: 'Bình Định',
        price: "1,000,000",
    }, {
        src: '/assets/img/banner/hoian.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    }, {
        src: '/assets/img/haugiang.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    }, {
        src: '/assets/img/cantho.jpg',
        title: 'Bình Thuận',
        price: "1,000,000",
    },
]

export default function SecondHero() {
    return (
        <div className='h-screen w-screen items-center mt-16'>
            <div className='flex-center container items-start -skew-x-6'>
                <h2 className='uppercase text-blackcus text-6xl font-black text-opacity-95 '>Hot tour</h2>
                <p className='w-1/3 text-sm text-right text-gray-400'>Khám phá các tour hot nhất tuần qua của chúng tôi và đăng kí ngay hôm nay</p>
            </div>
            <div className={`container grid grid-cols-4 gap-10 place-items-start mt-6 `}>
                {source.map((item, index) => {
                    return <SecondHeroImage key={index} index={index} src={item.src} title={item.title} price={item.price} />
                })}
            </div>
        </div >
    );
}
