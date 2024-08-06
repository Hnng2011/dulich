type Header = Record<string, string | ((id: string) => string)>;

export const HREFS: { header: Header } = {
    header: {
        home: '/',
        about: '/about',
        tour: '/tour',
        news: '/news',
        contact: '/contact',
        tourid: (id: string) => `/tour/${id}`
    }
}
