'use client'

import { useGetTranslation } from '@/api/get_data';
import React, { createContext, useContext, useState, ReactNode } from 'react';


const LanguageContext = createContext<LanguageContextType>({
    language: 'vn',
    updateLanguage: (lang: LanguageType) => { },
    t: null
});

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

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<LanguageType>(getCurrentLanguage());
    const { data } = useGetTranslation(language)

    const updateLanguage = (lang: LanguageType) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('domain_lang', lang);
            setLanguage(lang);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, updateLanguage, t: data }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
