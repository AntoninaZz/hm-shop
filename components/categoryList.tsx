import { getCategories } from "@/lib/actions/action";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = async () => {
    const categories = await getCategories();
    return (
        <div className="px-4 overflow-x-scroll scrollbar-hide">
            <div className="flex gap-4 md:gap-8">
                {!categories || categories.length === 0 ? <p>No categories found</p> :
                    categories.map((category: CategoryType) => (<CategoryItem key={category._id} id={category._id} name={category.name} image={category.image} />))}
            </div>
        </div>
    );
}