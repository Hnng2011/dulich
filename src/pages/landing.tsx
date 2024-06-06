import FirstHero from '@/components/section/Hero/first_hero_view'
import FourthdHero from '@/components/section/Hero/fourth_hero_view'
import SecondHero from '@/components/section/Hero/second_hero_view'
import ThirdHero from '@/components/section/Hero/third_hero_view'
import Container from '@/components/ui/container'

export default function Landing() {
    return (
        <>
            <FirstHero />
            <Container className='h-24' />
            <SecondHero />
            <Container className='h-24' />
            <ThirdHero />
            <FourthdHero />
        </>
    )
}

