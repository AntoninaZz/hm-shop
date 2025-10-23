const sortProductsByStock = (products: ProductType[]) => {
    products = products.sort((a: ProductType, b: ProductType) => {
        const totalA = a.variants.reduce((sum, variant) => sum + variant.numberInStock, 0);
        const totalB = b.variants.reduce((sum, variant) => sum + variant.numberInStock, 0);
        return totalA === 0 ? 1 : totalB === 0 ? -1 : 0;
    });
    return products;
}

export const getCategories = async () => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    return await categories.json();
}

export const getBanners = async () => {
    const banners = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`);
    return await banners.json();
}

export const getProducts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    let products = await res.json();
    products = sortProductsByStock(products);
    return products;
}

export const getProductDetails = async (productId: string) => {
    const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`);
    return await product.json();
}

export const getSearch = async (query: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${query}`);
    let products = await res.json();
    products = sortProductsByStock(products);
    return products;
}

export const getOrders = async (customerId: string) => {
    const orders = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/customers/${customerId}`);
    return await orders.json();
}

export const getRelatedProducts = async (productId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${productId}/related`);
    let relatedProducts = await res.json();
    relatedProducts = sortProductsByStock(relatedProducts);
    return relatedProducts;
}