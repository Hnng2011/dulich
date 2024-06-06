import { ReactNode } from 'react'

interface FlexProp {
  column?: number
  row?: number
  children?: ReactNode
  className?: string
}

export default function Grid(props: FlexProp) {
  const template = props.row
    ? `grid-rows-${props.row}`
    : props.column
      ? `grid-cols-${props.column}`
      : 'grid-cols-2'

  return (
    <div className={`${props.className || ''} grid ${template}`}>
      {props.children}
    </div>
  )
}
