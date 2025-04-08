"use client";
import { useSearchParams } from 'next/navigation';
import { ProductItem } from "./ProductItem";

export const ProductList = ({ products }: { products: ProductType[] }) => {
    const searchParams = useSearchParams();
    const category = searchParams.get('cat');
    if (category) {
        products = products.filter((product) => product.category.findIndex((cat) => cat._id === category) > -1);
    }
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
            {!products || products.length === 0 ? <p>No products found</p> :
                products.map((product: ProductType) => <ProductItem key={product._id} product={product} />)}
        </div>
    );
}