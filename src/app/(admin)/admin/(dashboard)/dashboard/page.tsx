'use client'

import { useToken } from "@/context/auth_provider"
import React from "react"

export default function Dashboard() {
    const { token } = useToken()
    return (
        <>
            {token && 'Dashboard page'}
        </>
    )
}