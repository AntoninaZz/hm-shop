import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import ProductsHeader from "@/components/ProductsHeader";
import { SearchBar } from "@/components/SearchBar";
import { getCategories, getProducts, getSearch } from "@/lib/actions/action";

const ProductsPage = async ({ searchParams }: { searchParams: { search: string } }) => {
    const search = searchParams.search;
    let products: ProductType[];
    if (search) {
        products = await getSearch(search);
    } else {
        products = await getProducts();
    }
    const categories = await getCategories();
    return (
        <div className="page-padding">
            <Filter categories={categories} />
            <div className="h-8 w-full py-4 md:hidden"><SearchBar /></div>
            <ProductsHeader categories={categories} />
            <ProductList products={products} />
        </div>
    );
}

export default ProductsPage;