import ProductDetails from "@/components/ProductDetails";
import ProductList from "@/components/ProductList";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/action";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const productDetails: ProductType = await getProductDetails(id);
    const relatedProducts = await getRelatedProducts(id);
    return (
        <>
            <ProductDetails productDetails={productDetails} />
            <div className="mt-24 page-padding">
                <h1 className="text-2xl">Related Products</h1>
                <ProductList products={relatedProducts.sort((a: ProductType, b: ProductType) => a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0).slice(0, 4)} />
            </div>
        </>
    );
}

export default ProductPage;
export const dynamic = "force-dynamic";