'use server'

import { cookies } from 'next/headers'

export async function getCookies(name: string) {
    const cookieStore = cookies()
    const token = cookieStore.get(name)
    return token
}

export async function setCookies(name: string, value: Token, options = { httpOnly: true, secure: true }) {
    const cookieStore = cookies()
    cookieStore.set(name, value.toString(), {
        path: '/',
        ...options
    })
}

