import FirstHero from '@/components/Hero/first_hero_view'
import FourthdHero from '@/components/Hero/fourth_hero_view';
import SecondHero from '@/components/Hero/second_hero_view'
import ThirdHero from '@/components/Hero/third_hero_view';

export default function Home() {
    return (
        <div>
            <FirstHero />
            <SecondHero />
            <ThirdHero />
            <FourthdHero />
        </div>
    );
}
