"use client";

const ProductsHeader = ({ categories, search, filters }: { categories: CategoryType[], search: string | null, filters: { category?: string; sort?: string } }) => {
    let sortHeader = '';
    const category = categories.find((category) => category._id === filters.category);

    if (filters.sort) {
        switch (filters.sort) {
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
            <h1 className="mt-12 text-xl font-semibold">{search ? <><span className="font-normal">Search results for </span>{search}</> : filters.category ? category?.name : 'Products'}{filters.sort && ' (' + sortHeader + ')'}</h1>
            {filters.category ? <p className="text-sm text-[var(--color-muted-green)] mt-5">{category?.description}</p> : ''}
        </>
    )
}

export default ProductsHeader;