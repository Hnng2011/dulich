/* eslint-disable @typescript-eslint/no-explicit-any */
interface APIResponseSWR<T> {
  data: T | undefined
  error: any
  isValidating: boolean
  mutate: KeyedMutator<T>
}

interface ResponseImage {
  alt: string
  src: string
}

interface TourInfo {
  _id: string
  image_link: string[]
  title: string
  destination: string
  start_date: string
  // timeEnd: Date
  // transport: Array<string>
  price_after_discount: number
  price_before_discount?: number
  slot: number
  standard: 'Luxury' | 'Premium' | 'Standard'
  detail: string
  tour_id: string
  // tag?: 'hot' | 'fav'
  schedule: string
}

interface NewInfo {
  title: string
  image_link: string[]
  time: Date
  author: string
}

interface Token {
  new_tokens: {
    role: string
    accessToken: string
    refreshToken: string
    user_id: string
    accessTokenExpiresAt: string
    refreshTokenExpiresAt: string
  }
}

interface ImageSrc {
  name: string
  image_link: string[]
}
