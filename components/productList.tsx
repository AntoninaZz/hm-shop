import { ProductItem } from "./productItem";

export const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    );
}