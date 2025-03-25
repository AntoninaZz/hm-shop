import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";

export default function ProductsPage() {
    return (
        <div className="page-padding">
            <Filter />
            <h1 className="mt-12 text-xl font-semibold">Products</h1>
            <ProductList />
        </div>
    );
}