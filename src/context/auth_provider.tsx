/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect } from 'react';
import { create } from 'zustand'
import { getCookies, setCookies } from '@/utils/cookies';

const useStoreToken = create<TokenState>((set) => ({
    token: undefined,
    isSave: false,
    setToken: (newToken) => set({ token: newToken }),
    setSave: () => set({ isSave: true }),
}));

export const useToken = () => {
    const { token, isSave, setToken, setSave } = useStoreToken(state => ({
        token: state.token,
        isSave: state.isSave,
        setToken: state.setToken,
        setSave: state.setSave,
    }));
    return { token, isSave, setToken, setSave };
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const { token, isSave, setToken, setSave } = useToken()
    const pathname = usePathname()



    useEffect(() => {
        const loadToken = async () => {
            const tokenCookies = await getCookies('token')
            if (tokenCookies) {
                setToken(tokenCookies as unknown as Token);
                setSave()
            } else {
                setToken(null)
            }
        }

        !token && loadToken()
    }, [])

    useEffect(() => {
        const handle = async () => {
            if (!token) {
                pathname !== '/admin/login' && token !== undefined && router.push('/admin/login')
            } else {
                if (!isSave) {
                    await setCookies('token', token as Token, { httpOnly: true, secure: true })
                }
                pathname !== '/admin/dashboard' && router.push('/admin/dashboard')
            }
        }

        handle()
    }, [token])

    return (
        <>
            {children}
        </>
    )
};

