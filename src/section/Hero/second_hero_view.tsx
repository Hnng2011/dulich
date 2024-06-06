import './styles.css';
import SecondHeroContent from './SecondHero/second_hero_content';

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
    }, {
        src: '/assets/img/banner/hoian.jpg',
        title: 'Bình Thuận',
        price: 22000000,
    }, {
        src: '/assets/img/cantho.jpg',
        title: 'Bình Thuận',
        price: 45000000,
    },
]

export default function SecondHero() {
    return (
        <SecondHeroContent />
    )
}
