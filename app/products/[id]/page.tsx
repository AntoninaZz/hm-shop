import { Add } from "@/components/Add";
import { CustomizeProduct } from "@/components/CustomizeProduct";
import { ProductImages } from "@/components/ProductImages";

export default function ProductPage() {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 relative">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p>Description Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis molestias corrupti vero blanditiis reprehenderit soluta libero ducimus dolor earum labore tempora dolores numquam eum tenetur, explicabo odit. A, blanditiis pariatur?</p>
                <hr className="text-[var(--color-light-beige)]" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-[var(--color-powder-pink)] line-through">49$</h3>
                    <h2 className="font-medium text-2xl">45$</h2>
                </div>
                <hr className="text-[var(--color-light-beige)]" />
                <CustomizeProduct />
                <Add />
                <hr className="text-[var(--color-light-beige)]" />
                <div className="text-sm">
                    <h4 className='font-medium mb-4 uppercase'>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut repellendus illo placeat nesciunt sequi. Accusantium, nam iste rem distinctio ex aspernatur hic! Ab vel recusandae nostrum harum dicta. Officia.</p>
                </div>
                <div className="text-sm">
                    <h4 className='font-medium mb-4 uppercase'>Product Info</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut repellendus illo placeat nesciunt sequi. Accusantium, nam iste rem distinctio ex aspernatur hic! Ab vel recusandae nostrum harum dicta. Officia.</p>
                </div>
            </div>
        </div>
    );
}