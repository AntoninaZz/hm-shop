import Link from "next/link";
import Image from "next/image";
import { AddToCartBtn } from "./AddToCartBtn";
interface ProductItemProps {
    id: string;
    name: string;
    price: number;
    numberInStock: number;
    media: string[];
}
export const ProductItem: React.FC<ProductItemProps> = ({ id, name, price, numberInStock, media }) => {
    return (
        <Link href={`products/${id}`} className="w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image src={media[0]} alt={name} fill sizes="25vw" className="absolute object-cover rounded-md z-1 hover:opacity-0 transition-opacity ease-in duration-500" />
                <Image src={media[1]} alt={name} fill sizes="25vw" className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4">
                <span className="font-medium text-nowrap overflow-hidden text-ellipsis">{name}</span>
                <span className="font-semibold">{price}$</span>
            </div>
            <div className="text-sm text-[var(--color-muted-green)]">{numberInStock > 0 ? 'available' : 'unavailable'}</div>
            <AddToCartBtn />
        </Link>
    );
}