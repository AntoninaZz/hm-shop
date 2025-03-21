import { ProductImages } from "@/components/productImages";

export default function ProductPage() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 relative">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">text</div>
        </div>
    );
}