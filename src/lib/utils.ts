import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractPathname = (url: string, index: number): string => {
  return (
    decodeURIComponent(url)
      .split('&')
      ?.[index]?.substring(
        decodeURIComponent(url).split('&')?.[index].indexOf('=') + 1,
      ) || url
  )
}

export function convertToLocalDate(date: Date) {
  const day = date.getDate()
  const month = date.getMonth() + 1

  const formattedDate =
    (month < 10 ? '0' : '') +
    month +
    '.' +
    (day < 10 ? '0' : '') +
    day +
    '.' +
    date.getFullYear()

  return formattedDate
}

export function countDays(dateStart: Date, dateEnd: Date) {
  const start = dateStart.getDate()
  const end = dateEnd.getDate()
  const differenceInTime = end - start

  return differenceInTime
}

export function formatPrice(price: number, currency: Currency) {
  const locale: Locale = currency === 'VND' ? 'vi-VN' : 'en-US'
  const config = {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }

  return new Intl.NumberFormat(locale, config).format(price * 1000)
}
