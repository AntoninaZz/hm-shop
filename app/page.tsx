import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Slider } from "@/components/Slider";
import { getBanners, getProducts } from "@/lib/actions/action";

const Home = async () => {
  const products = await getProducts();
  const banners = await getBanners();

  return (
    <div>
      <Slider slides={banners} />
      <div className="mt-24 page-padding">
        <h1 className="text-2xl">New Products</h1>
        <ProductList products={products.slice(0, 4)} />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl page-padding mb-12">Categories</h1>
        <CategoryList />
      </div>
    </div>
  );
}

export default Home;