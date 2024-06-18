import useSWR from 'swr'
import fetcher, { fetcherLocale } from './fetcher'
import { useMemo } from 'react';

export function useGetTranslation(locale: Locale) {
    const { data } = useSWR(`/locales/${locale}/common.json`, fetcherLocale);
    return { data }
}

export function useGetTours(): APIResponseSWR<TourInfo[]> {
    const { data, error, isValidating, mutate } = useSWR(`/api/tour`, fetcher);

    const memoizedValues = useMemo(() => ({
        data,
        error,
        isValidating,
        mutate,
    }), [data, error, isValidating, mutate]);

    return memoizedValues
}

export function useGetTour(id: string): APIResponseSWR<TourInfo> {
    const { data, error, isValidating, mutate } = useSWR(`/api/tour/${id}`, fetcher);

    const memoizedValues = useMemo(() => ({
        data,
        error,
        isValidating,
        mutate,
    }), [data, error, isValidating, mutate]);

    return memoizedValues
}