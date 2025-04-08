import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Slider } from "@/components/Slider";
import { getProducts } from "@/lib/action";

const Home = async () => {
  const products = await getProducts();

  return (
    <div>
      <Slider />
      <div className="mt-24 page-padding">
        <h1 className="text-2xl">New Products</h1>
        <ProductList products={products} />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl page-padding mb-12">Categories</h1>
        <CategoryList />
      </div>
    </div>
  );
}

export default Home;