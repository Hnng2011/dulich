export function formatPrice(price: number, currency: Currency) {
    const locale: Locale = currency === 'VND' ? 'vi-VN' : 'en-US'
    const config = { style: "currency", currency: currency, maximumFractionDigits: 0 }

    return new Intl.NumberFormat(locale, config).format(price * 1000);
}
