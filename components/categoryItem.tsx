import Link from "next/link";
import Image from "next/image";

export const CategoryItem = () => {
    return (
        <Link href='/products?cat=category' className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-[var(--color-light-beige)] w-full h-96 ">
                <Image src='/slide1.jpg' alt='category' fill sizes='20vw' className='object-cover' />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
    );
}