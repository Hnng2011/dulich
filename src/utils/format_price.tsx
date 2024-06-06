function formatPrice(price: number , currency : "vnd" | "usd") {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").concat(`${currency === 'vnd' ? 'đ': '$'}`);
}

export default formatPrice;