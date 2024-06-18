type Currency = 'VND' | 'USD'
type Locale = 'vi-VN' | 'vn' | 'en-US' | 'en'

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  maxLines?: number
  isLineHeight?: boolean
}
