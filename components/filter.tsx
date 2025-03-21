export const Filter = () => {
    return (
        <div className="mt-12 flex justify-between flex-wrap gap-4">
            <select name="category" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0">
                    <option>Category</option>
                    <option value='toy'>Toy</option>
                    <option value='pattern'>Pattern</option>
                </select>
                <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-[var(--color-milk)] outline-0">
                    <option>Sort By</option>
                    <option value='cheap'>Price (low to high)</option>
                    <option value='expensive'>Price (high to low)</option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
        </div>
    );
}