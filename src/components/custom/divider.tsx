import * as React from "react"

import { cn } from "@/lib/utils"

export interface DividerProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Divider = React.forwardRef<HTMLInputElement, DividerProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className={cn('my-2 h-[1px] bg-muted-foreground w-full', className)} {...props} ref={ref}>
            </div>
        )
    }
)

Divider.displayName = "Divider"

export { Divider }
