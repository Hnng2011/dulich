import * as React from 'react'
import FirstHeroImage from './FirstHero/first_hero_image'
import FirstHeroContent from './FirstHero/first_hero_content'

export default function FirstHero() {
  return (
    <div className="w-full flex flex-col shadow">
      <FirstHeroImage />
      <FirstHeroContent />
    </div>
  )
}
