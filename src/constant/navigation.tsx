type Header = Record<string, string>;

export const HREFS: { header: Header, tourid: (id: string) => string } = {
    header: {
        home: '/',
        about: '/about',
        tour: '/tour',
        // news: '/news',
        // contact: '/contact',
    },
    tourid: (id: string) => `/tour/${id}`
}
