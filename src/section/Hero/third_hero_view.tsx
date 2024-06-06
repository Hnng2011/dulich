import Container from '@/components/ui/container';
import './styles.css';
import ThirdHeroContent from './ThirdHero/third_hero_content';
import Flex from '@/components/ui/flex';

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

export default function ThirdHero() {
    return (
        <Container>
            <Flex className='items-start -skew-x-6'>
                <h2 className='uppercase text-blackcus text-3xl font-black text-opacity-95 font-bitter text-subtext'>HOT DEAL</h2>
                <p className='w-1/3 text-sm text-right text-muted-foreground'>Đắm chìm trong các cảnh đẹp độc nhất , cuộc sống thú vị của Việt Nam</p>
            </Flex>
            <Container className='h-6' />
            <ThirdHeroContent />
        </Container >
    );
}
