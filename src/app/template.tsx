import React from "react"
import Header from "@/components/Header/header"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}