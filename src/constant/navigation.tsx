interface Navigation {
    [key: string]: {
        [key: string]: string
    }
}

export const HREFS: Navigation = {
    header: {
        home: '/',
        about: '/about',
        tour: '/tour'
    }
}