import FirstHero from '@/section/Hero/first_hero_view'
import FourthdHero from '@/section/Hero/fourth_hero_view'
import SecondHero from '@/section/Hero/second_hero_view'
import ThirdHero from '@/section/Hero/third_hero_view'
import Container from '@/components/ui/container'
import FifthHero from '@/section/Hero/fifth_hero_view'

export default function Landing() {
  return (
    <>
      <FirstHero />
      <Container className="h-24" />
      <SecondHero />
      <Container className="h-24" />
      <ThirdHero />
      <Container className="h-24" />
      <FourthdHero />
      <Container className="h-24" />
      <FifthHero />
      <Container className="h-24" />
    </>
  )
}
