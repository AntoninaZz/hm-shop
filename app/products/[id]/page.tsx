import { Add } from "@/components/Add";
import { CustomizeProduct } from "@/components/CustomizeProduct";
import { ProductImages } from "@/components/ProductImages";
import { getProductDetails } from "@/lib/action";

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const productDetails: ProductType = await getProductDetails(params.id);
    console.log(productDetails);
    return (
        <div className="page-padding flex flex-col lg:flex-row gap-16 relative">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages media={productDetails.media} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h1 className="text-4xl font-medium">{productDetails.name}</h1>
                    <p className="text-sm text-[var(--color-muted-green)]">{productDetails.category.map((cat) => cat.name).join(', ')}</p>
                </div>
                <p>{productDetails.description}</p>
                <hr className="text-[var(--color-muted-green)]" />
                <div className="flex items-center gap-4">
                    {productDetails.discount > 0 && (<div className="relative">
                        <h3 className="text-xl text-[var(--color-powder-pink)] line-through">{productDetails.price}$</h3>
                        <p className="absolute left-10 bottom-5 rounded-md px-1 bg-[var(--color-powder-pink)] text-white">-{productDetails.discount}%</p>
                    </div>)}
                    <h2 className="font-medium text-2xl">{Math.round(productDetails.price * (100 - productDetails.discount)) / 100}$</h2>
                </div>
                <hr className="text-[var(--color-muted-green)]" />
                <CustomizeProduct colors={productDetails.colors} sizes={productDetails.sizes} />
                <Add numberInStock={productDetails.numberInStock} />
                <hr className="text-[var(--color-muted-green)]" />
                <div className="text-sm">
                    <h4 className='font-medium mb-4 uppercase'>Description</h4>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                            <p>External material</p>
                            <p>{productDetails.externalMaterial}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Internal material</p>
                            <p>{productDetails.internalMaterial}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;