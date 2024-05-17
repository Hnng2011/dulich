'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

const LanguageContext = createContext({
    language: 'en', // Giá trị ngôn ngữ mặc định
    updateLanguage: (lang: string) => { } // Hàm mặc định không làm gì cả
});

const getCurrentLanguage = () => {
    const storedLang = localStorage.getItem('domain_lang');
    if (!storedLang) {
        localStorage.setItem('domain_lang', 'en'); // Set mặc định là 'en' nếu chưa có
        return 'en';
    }
    return storedLang;
};

export const useTranslation = () => {
    const { language } = useLanguage();
    const [translations, setTranslations] = useState<any>(null);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const response = await fetch(`/locales/${language}/common.json`);
                const data = await response.json();
                setTranslations(data);
            } catch (error) {
                console.error('Failed to load language file:', error);
            }
        };

        loadTranslations();
    }, [language]);

    return useMemo(() => translations, [translations]);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState(getCurrentLanguage());

    useEffect(() => {
        const handleStorageChange = () => {
            setLanguage(getCurrentLanguage());
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const updateLanguage = (lang: string) => {
        localStorage.setItem('domain_lang', lang);
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, updateLanguage, }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
