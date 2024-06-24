import useSWR, { preload } from 'swr'
import fetcher from './fetcher'
import { useMemo } from 'react';

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

export const preloadTour = (id: string) => preload(`/api/tour/${id}`, fetcher)

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