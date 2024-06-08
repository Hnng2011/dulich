import React from "react"
import Header from "@/section/Header/header"
import Footer from "@/section/Footer/footer"

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}