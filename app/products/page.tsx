import { Filter } from "@/components/filter";
import { ProductList } from "@/components/productList";

export default function ProductsPage() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            <Filter />
            <h1 className="mt-12 text-xl font-semibold">Products</h1>
            <ProductList />
        </div>
    );
}