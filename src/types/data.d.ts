interface APIResponse<T> {
  status: number | null
  message: string | null
  data: T
}

interface ResponseImage {
  alt: string
  src: string
}

interface TourInfo {
  img: string
  name: string
  timeStart: Date
  timeEnd: Date
  transport: Array<string>
  price: [number, Currency]
  fixedPrice?: [number, Currency]
  tag?: 'hot' | 'fav'
}

interface NewInfo
  extends Omit<
    TourInfo,
    'timeStart' | 'timeEnd' | 'transport' | 'price' | 'fixedPrice'
  > {
  time: Date
  author: string
}
