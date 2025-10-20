import Link from "next/link";
import Image from "next/image";

interface CategoryItemProps {
    id: string,
    name: string;
    image: string;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ id, name, image }) => {
    return (
        <Link href={`/products?cat=${id}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
            <div className="relative bg-[var(--color-light-beige)] w-full h-96 ">
                <Image src={image} alt={name} fill sizes='(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw' className='object-cover' quality={100} />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">{name}</h1>
        </Link>
    );
}