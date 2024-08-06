/* eslint-disable @typescript-eslint/no-explicit-any */

type Currency = 'VND' | 'USD'
type Locale = 'vi-VN' | 'vn' | 'en-US' | 'en'
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  maxLines?: number
  isLineHeight?: boolean
}

interface LanguageState {
  language: Locale
  updateLanguage: (lang: Locale) => void
  setT: (trans: object) => void
  t: any
}
