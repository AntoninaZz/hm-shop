"use client";
import { useSearchParams } from "next/navigation";

const ProductsHeader = ({ categories }: { categories: CategoryType[] }) => {
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get('cat');
    const searchQuery = searchParams.get('search');
    const category = categories.find((category) => category._id === selectedCategory);
    return (
        <>
            {searchQuery ? <h1 className="mt-12 text-xl">Search results for <span className="font-semibold">{searchQuery}</span></h1> : <h1 className="mt-12 text-xl font-semibold">{selectedCategory ? category?.name : 'Products'}</h1>}
            {selectedCategory ? <p className="text-sm text-[var(--color-muted-green)] mt-5">{category?.description}</p> : ''}
        </>
    )
}

export default ProductsHeader;