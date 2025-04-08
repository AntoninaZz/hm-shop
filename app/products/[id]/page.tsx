import ProductDetails from "@/components/ProductDetails";
import { getProductDetails } from "@/lib/actions/action";

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const productDetails: ProductType = await getProductDetails(params.id);
    return (
        <ProductDetails productDetails={productDetails} />
    );
}

export default ProductPage;