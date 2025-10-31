"use client";
import { useEffect, useState } from "react";
import { Filter } from "@/components/Filter";
import ProductList from "@/components/ProductList";
import ProductsHeader from "@/components/ProductsHeader";
import { SearchBar } from "@/components/SearchBar";
import { getCategories, getProducts, getSearch } from "@/lib/actions/action";
import Loader from "@/components/Loader";

const ProductsPage = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const [filters, setFilters] = useState<{ category?: string; sort?: string }>({});
    const [search, setSearch] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = new URL(window.location.href);
                const searchParam = url.searchParams.get("search");
                setSearch(searchParam);
                const categoriesData = await getCategories();
                let productsData: ProductType[];
                if (searchParam) {
                    productsData = await getSearch(searchParam);
                } else {
                    productsData = await getProducts();
                }
                setCategories(categoriesData);
                setProducts(productsData);
                setFilteredProducts(productsData);
            } catch (error) {
                console.log("[ProductsPage]", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let result = [...products];
        if (filters.category) {
            result = result.filter(
                (product) => product.category.findIndex((cat) => cat._id === filters.category) > -1
            );
        }
        if (filters.sort) {
            switch (filters.sort) {
                case "price-asc":
                    result.sort(
                        (a, b) =>
                            Math.round(a.price * (100 - a.discount)) / 100 -
                            Math.round(b.price * (100 - b.discount)) / 100
                    );
                    break;
                case "price-desc":
                    result.sort(
                        (a, b) =>
                            Math.round(b.price * (100 - b.discount)) / 100 -
                            Math.round(a.price * (100 - a.discount)) / 100
                    );
                    break;
                case "time-desc":
                    result.sort((a, b) =>
                        a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
                    );
                    break;
                case "time-asc":
                    result.sort((a, b) =>
                        a.createdAt > b.createdAt ? 1 : a.createdAt < b.createdAt ? -1 : 0
                    );
                    break;
                default:
                    break;
            }
        }
        setFilteredProducts(result);
    }, [filters, products]);

    return (loading ? <Loader /> :
        <div className="page-padding">
            <Filter categories={categories} selectedCategory={filters.category} selectedSort={filters.sort} onFilterChange={setFilters} />
            <div className="h-8 w-full py-4 md:hidden"><SearchBar /></div>
            <ProductsHeader categories={categories} search={search} filters={filters} />
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;
export const dynamic = "force-dynamic";