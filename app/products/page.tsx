"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const searchParam = searchParams.get("search");
                const catParam = searchParams.get("cat");
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

                if (catParam) {
                    const exists = categoriesData.some((category: CategoryType) => category._id === catParam);
                    if (exists) {
                        setFilters((prev) => ({ ...prev, category: catParam }));
                    }
                }
            } catch (error) {
                console.log("[ProductsPage]", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchParams]);

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

    const handleFilterChange = (newFilters: { category?: string; sort?: string }) => {
        setFilters(newFilters);
        const params = new URLSearchParams(searchParams);
        if (newFilters.category) {
            params.set("cat", newFilters.category);
        } else {
            params.delete("cat");
        }
        router.replace(`/products?${params.toString()}`, { scroll: false });
    };

    return (loading ? <Loader /> :
        <div className="page-padding">
            <Filter categories={categories} selectedCategory={filters.category} selectedSort={filters.sort} onFilterChange={handleFilterChange} />
            <div className="h-8 w-full py-4 md:hidden"><SearchBar /></div>
            <ProductsHeader categories={categories} search={search} filters={filters} />
            <ProductList products={filteredProducts} />
        </div>
    );
}

export default ProductsPage;
export const dynamic = "force-dynamic";