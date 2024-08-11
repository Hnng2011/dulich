import useSWR from 'swr'
import { useMemo } from 'react';
import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */
// fetcher.ts

const fetcher = async (url: string): Promise<any> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error}`);
    }
};

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

export function useGetImagesStorage(): APIResponseSWR<ImageSrc[]> {
    const { data, error, isValidating, mutate } = useSWR('/api/tour/get-all-image', fetcher);

    const memoizedValues = useMemo(() => ({
        data,
        error,
        isValidating,
        mutate,
    }), [data, error, isValidating, mutate]);

    return memoizedValues
}