'use client'

import React, { ReactNode, HTMLProps } from "react";
import { cn } from "@/lib/utils"

interface ContainerProp extends HTMLProps<HTMLDivElement> {
    children?: ReactNode
    center?: boolean
}

const Container: React.FC<ContainerProp> = (props) => {
    return (
        <div className={cn(`container w-full mx-auto`, props.className)}>
            {props.children}
        </div>
    );
}

export default Container