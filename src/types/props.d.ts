type Currency = 'VND' | 'USD'
type Locale = 'vi-VN' | 'en-US'

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  maxLines?: number
  isLineHeight?: boolean
}
