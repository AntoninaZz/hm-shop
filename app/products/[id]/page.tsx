import ProductDetails from "@/components/ProductDetails";
import { ProductList } from "@/components/ProductList";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/action";

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const productDetails: ProductType = await getProductDetails(params.id);
    const relatedProducts = await getRelatedProducts(params.id);
    return (
        <>
            <ProductDetails productDetails={productDetails} />
            <div className="mt-24 page-padding">
                <h1 className="text-2xl">Related Products</h1>
                <ProductList products={relatedProducts} />
            </div>
        </>
    );
}

export default ProductPage;