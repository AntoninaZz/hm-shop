export const getCategories = async () => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    return await categories.json();
}

export const getBanners = async () => {
    const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);
    return await banners.json();
}

export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return await products.json();
}

export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    return await product.json();
}

export const getSearch = async (query: string) => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    return await products.json();
}

export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    return await orders.json();
}

export const getRelatedProducts = async (productId: string) => {
    const relatedProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    return await relatedProducts.json();
}