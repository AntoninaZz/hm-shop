import Link from "next/link";
import Image from "next/image";

export const ProductItem = () => {
    return (
        <Link href='products/product' className="w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image src='/slide2.jpg' alt='product' fill sizes="25vw" className="absolute object-cover rounded-md z-1 hover:opacity-0 transition-opacity ease-in duration-500" />
                <Image src='/slide3.jpg' alt='product' fill sizes="25vw" className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4">
                <span className="font-medium">Product Name</span>
                <span className="font-semibold">45$</span>
            </div>
            <div className="text-sm text-[var(--color-muted-green)]">Description</div>
            <button className="w-max rounded-2xl ring-1 ring-[var(--color-muted-green)] text--[var(--color-muted-green)] py-2 px-4 text-xs hover:bg-[var(--color-muted-green)] hover:text-white cursor-pointer">Add to Cart</button>
        </Link>
    );
}