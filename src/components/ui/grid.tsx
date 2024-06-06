import { ReactNode } from "react"

interface FlexProp {
    children?: ReactNode,
    className?: string
}

export default function Grid(props: FlexProp) {
    return (
        <div className={`${props.className || ''} grid grid-cols-2`} >
            {props.children}
        </div>
    )
}