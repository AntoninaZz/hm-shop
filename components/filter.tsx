"use client";

interface FilterProps {
    categories: CategoryType[];
}

export const Filter: React.FC<FilterProps> = ({ categories }) => {
    return (
        <div className="mt-12 flex justify-between flex-wrap gap-4">
            {!categories || categories.length === 0 ? '' :
                <select name="category" id="category" onChange={(e) => window.location.href = `/products?cat=${e.target.value}`} className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0">
                    <option>Category</option>
                    {categories.map((category: CategoryType) => (<option key={category._id} value={category._id} >{category.name}</option>))}
                </select>}
            <select name="sort" id="sort" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0">
                <option>Sort By</option>
                <option value='cheap'>Price (low to high)</option>
                <option value='expensive'>Price (high to low)</option>
                <option value='newest'>Newest</option>
                <option value='oldest'>Oldest</option>
            </select>
        </div>
    );
}