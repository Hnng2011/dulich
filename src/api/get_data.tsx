import useSWR from 'swr'
import { useMemo } from 'react';
import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */
// fetcher.ts

const fetcher = async (url: string): Promise<any> => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzkwOTExZWUtNWJlNi00ODNmLWFhMzUtNWVlNzdkYWQ3ZjBjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4MTk0NTMyLCJleHAiOjE3MTgxOTU0MzJ9.rfI4aPBKLFA7pABgNwEtUTil19jeaxFWjsGMaU72RAg';

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

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