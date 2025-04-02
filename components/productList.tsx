import { getProducts } from "@/lib/action";
import { ProductItem } from "./ProductItem";

export const ProductList = async () => {
    const products = await getProducts();
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            {products.map((product: ProductType) => <ProductItem key={product._id} id={product._id} name={product.name} price={product.price} numberInStock={product.numberInStock} media={product.media} />)}
        </div>
    );
}