import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import { SearchBar } from "@/components/SearchBar";

export default function ProductsPage() {
    return (
        <div className="page-padding">
            <Filter />
            <div className="h-8 w-full py-4 md:hidden"><SearchBar /></div>
            <h1 className="mt-12 text-xl font-semibold">Products</h1>
            <ProductList />
        </div>
    );
}