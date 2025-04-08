import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import ProductsHeader from "@/components/ProductsHeader";
import { SearchBar } from "@/components/SearchBar";
import { getCategories, getProducts } from "@/lib/action";

const ProductsPage = async () => {
    const categories = await getCategories();
    const products = await getProducts();
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