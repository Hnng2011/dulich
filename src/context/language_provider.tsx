'use client'

import React, { ReactNode, useEffect } from 'react';
import { create } from 'zustand'
import en from '../../public/locales/en/common.json'
import vn from '../../public/locales/vn/common.json'


const getCurrentLanguage = (): LanguageType => {
    if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('domain_lang');
        if (!storedLang) {
            localStorage.setItem('domain_lang', 'vn');
            return 'vn'
        }

        return storedLang as LanguageType
    }

    return 'vn'
};

const useStoreLanguage = create<LanguageState>(
    (set) =>
    ({
        language: getCurrentLanguage(),
        updateLanguage: (newLang) => set({ language: newLang }),
        setT: (newTrans) => set({ t: newTrans }),
        t: null
    }))

export const useLanguage = () => {
    const { language, updateLanguage, setT, t } = useStoreLanguage((state) =>
        ({ language: state.language, updateLanguage: state.updateLanguage, setT: state.setT, t: state.t }))

    return { language, updateLanguage, t, setT }
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const { language, setT } = useLanguage();

    useEffect(() => { setT(language === 'en' ? en : vn) }, [language])

    return (
        <>
            {children}
        </>
    );
};

