import React from "react"
import AuthProvider from "@/context/auth_provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
