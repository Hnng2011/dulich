// fetcher.ts
const fetcher = async (url: string): Promise<any> => {
    const token = sessionStorage.getItem('token') || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzkwOTExZWUtNWJlNi00ODNmLWFhMzUtNWVlNzdkYWQ3ZjBjIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE4MTk0NTMyLCJleHAiOjE3MTgxOTU0MzJ9.rfI4aPBKLFA7pABgNwEtUTil19jeaxFWjsGMaU72RAg';

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
        headers: {
            Authorization: `Bearer ${token}`

        }
    });



    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export const fetcherLocale = async (url: string): Promise<any> => {
    if (window !== undefined) {
        const response = await fetch(`${window.location.origin}/${url}`);

        return response.json();
    }

    return {}
};


export default fetcher;
