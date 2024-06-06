import { ReactNode } from "react"

interface FlexProp {
    justify?: 'center' | 'start' | 'end' | 'between' | 'around' | 'evenly' | 'stretch' | undefined,
    align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch' | undefined,
    children?: ReactNode,
    className?: string
}

export default function Flex(props: FlexProp) {
    const align = () => {
        switch (props.align) {
            case 'center':
                return 'items-center'
            case 'start':
                return 'items-start'
            case 'end':
                return 'items-end'
            case 'baseline':
                return 'items-baseline'
            case 'stretch':
                return 'items-stretch'
            default:
                return 'items-center'
        }
    }

    const justify = () => {
        switch (props.justify) {
            case 'center':
                return 'justify-center'
            case 'start':
                return 'justify-start'
            case 'end':
                return 'justify-end'
            case 'between':
                return 'justify-between'
            case 'around':
                return 'justify-around'
            case 'evenly':
                return 'justify-evenly'
            case 'stretch':
                return 'justify-stretch'
            default:
                return 'justify-between'
        }
    }

    return (
        <div className={`flex ${align()} ${justify()} ${props.className}`} >
            {props.children}
        </div>
    )
}