import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-24 page-padding">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl page-padding mb-12">Categories</h1>
        <CategoryList />
      </div>
    </div>
  );
}
