import { getProducts } from "@/lib/action";
import { ProductItem } from "./ProductItem";

export const ProductList = async () => {
    const products = await getProducts();
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
            {!products || products.length === 0 ? <p>No products found</p> :
                products.map((product: ProductType) => <ProductItem key={product._id} product={product} />)}
        </div>
    );
}