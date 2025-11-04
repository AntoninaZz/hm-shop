"use client";
import { useState, useEffect } from "react";

interface FilterProps {
    categories: CategoryType[];
    selectedCategory?: string;
    selectedSort?: string;
    onFilterChange: (filters: { category?: string; sort?: string }) => void;
}

export const Filter: React.FC<FilterProps> = ({ categories, selectedCategory, selectedSort, onFilterChange }) => {
    const [category, setCategory] = useState(selectedCategory || "");
    const [sort, setSort] = useState(selectedSort || "");

    useEffect(() => {
        setCategory(selectedCategory || "");
    }, [selectedCategory]);

    useEffect(() => {
        setSort(selectedSort || "");
    }, [selectedSort]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value === "Category" ? "" : e.target.value;
        setCategory(value);
        onFilterChange({ category: value, sort });
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value === "Sort By" ? "" : e.target.value;
        setSort(value);
        onFilterChange({ category, sort: value });
    };

    return (
        <div className="mt-12 flex justify-between flex-wrap gap-4">
            {!categories || categories.length === 0 ? '' :
                <select name="category" id="category" value={category} onChange={handleCategoryChange} className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0">
                    <option>Category</option>
                    {categories.map((category: CategoryType) => (<option key={category._id} value={category._id} >{category.name}</option>))}
                </select>}
            <select name="sort" id="sort" value={sort} onChange={handleSortChange} className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0" >
                <option>Sort By</option>
                <option value='price-asc'>Price (low to high)</option>
                <option value='price-desc'>Price (high to low)</option>
                <option value='time-desc'>Newest</option>
                <option value='time-asc'>Oldest</option>
            </select>
        </div>
    );
}