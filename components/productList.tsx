import { ProductItem } from "./ProductItem";

interface ProductListProps {
    products: ProductType[];
    updateSignInUser?: (updatedUser: UserType) => void;
}

export const ProductList = ({ products, updateSignInUser }: ProductListProps) => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
            {!products || products.length === 0 ? <p>No products found</p> :
                products.map((product: ProductType) => <ProductItem key={product._id} product={product} updateSignInUser={updateSignInUser} />)}
        </div>
    );
}