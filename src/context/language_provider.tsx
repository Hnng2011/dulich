'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

const LanguageContext = createContext({
    language: 'en',
    updateLanguage: (lang: string) => { }
});

const getCurrentLanguage = () => {
    if (typeof window !== 'undefined') {
        const storedLang = localStorage.getItem('domain_lang');
        if (!storedLang) {
            localStorage.setItem('domain_lang', 'en');
            return 'en';
        }
        return storedLang;
    }
    return 'en'; // Fallback for server-side rendering
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

        if (typeof window !== 'undefined') {
            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }
    }, []);

    const updateLanguage = (lang: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('domain_lang', lang);
            setLanguage(lang);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, updateLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
