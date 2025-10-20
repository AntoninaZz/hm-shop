import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import ProductsHeader from "@/components/ProductsHeader";
import { SearchBar } from "@/components/SearchBar";
import { getCategories, getProducts, getSearch } from "@/lib/actions/action";

const ProductsPage = async ({ searchParams }: { searchParams: { search: string, cat: string, sort: string } }) => {
    const categories = await getCategories();
    const search = searchParams.search;
    const category = searchParams.cat;
    const sort = searchParams.sort;
    let products: ProductType[];
    if (search) {
        products = await getSearch(search);
    } else {
        products = await getProducts();
    }
    if (category) {
        products = products.filter((product) => product.category.findIndex((cat) => cat._id === category) > -1);
    }
    if (sort) {
        switch (sort) {
            case "price-asc":
                products = products.sort((a, b) => (Math.round(a.price * (100 - a.discount)) / 100) - (Math.round(b.price * (100 - b.discount)) / 100));
                break;
            case "price-desc":
                products = products.sort((a, b) => (Math.round(b.price * (100 - b.discount)) / 100) - (Math.round(a.price * (100 - a.discount)) / 100));
                break;
            case "time-desc":
                products = products.sort((a, b) => a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0);
                break;
            case "time-asc":
                products = products.sort((a, b) => a.createdAt > b.createdAt ? 1 : a.createdAt < b.createdAt ? -1 : 0);
                break;
            default:
                break;
        }
    }
    products = products.sort((a, b) => {
        const totalA = a.variants.reduce((sum, variant) => sum + variant.numberInStock, 0);
        const totalB = b.variants.reduce((sum, variant) => sum + variant.numberInStock, 0);
        return totalA === 0 ? 1 : totalB === 0 ? -1 : 0;
    });

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
export const dynamic = "force-dynamic";