const extractPathname = (url: string, index: number): string => {
    return decodeURIComponent(url).split('&')?.[index]?.substring(decodeURIComponent(url).split('&')?.[index].indexOf('=') + 1) || url
}

export default extractPathname