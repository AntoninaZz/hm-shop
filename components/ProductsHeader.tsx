"use client";
import { useSearchParams } from "next/navigation";

const ProductsHeader = ({ categories }: { categories: CategoryType[] }) => {
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('cat');
    const searchQuery = searchParams.get('search');
    const sort = searchParams.get('sort');
    let sortHeader = '';
    const category = categories.find((category) => category._id === selectedCategory);

    if (sort) {
        switch (sort) {
            case "price-desc":
                sortHeader = 'from expensive to cheap';
                break;
            case "price-asc":
                sortHeader = 'from cheap to expensive';
                break;
            case "time-desc":
                sortHeader = 'from newest to oldest';
                break;
            case "time-asc":
                sortHeader = 'from oldest to newest';
                break;
            default:
                break;
        }
    }

    return (
        <>
            {searchQuery ? <h1 className="mt-12 text-xl">Search results for <span className="font-semibold">{searchQuery}</span></h1> : <h1 className="mt-12 text-xl font-semibold">{selectedCategory ? category?.name : 'Products'}{sort && ' (' + sortHeader + ')'}</h1>}
            {selectedCategory ? <p className="text-sm text-[var(--color-muted-green)] mt-5">{category?.description}</p> : ''}
        </>
    )
}

export default ProductsHeader;