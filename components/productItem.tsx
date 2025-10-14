import Link from "next/link";
import Image from "next/image";
import Like from "./Like";

interface ProductItemProps {
    product: ProductType;
    updateSignInUser?: (updatedUser: UserType) => void;
}

export const ProductItem: React.FC<ProductItemProps> = ({ product, updateSignInUser }) => {
    return (
        <Link href={`/products/${product._id}`} className={`w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%] ${product.numberInStock > 0 ? '' : 'grayscale'}`}>
            <div className="relative w-full h-80">
                <Image src={product.media[0]} alt={product.name} fill sizes="25vw" className="absolute object-cover rounded-md z-1 hover:opacity-0 transition-opacity ease-in duration-500" />
                <Image src={product.media[product.media.length - 1]} alt={product.name} fill sizes="25vw" className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4 relative">
                <span className="font-medium text-nowrap overflow-hidden text-ellipsis">{product.name}</span>
                <span className="font-semibold">{(Math.round(product.price * (100 - product.discount)) / 100).toFixed(2)}₴</span>
                {product.discount > 0 && <span className="absolute -top-3 -right-1 text-xs bg-[var(--color-powder-pink)] text-white px-1 rounded-md">-{product.discount}%</span>}
            </div>
            <div className="text-sm text-[var(--color-muted-green)]">{product.category.map((cat) => cat.name).join(', ')}</div>
            <div className="flex items-center justify-between gap-4">
                <button className="w-32 rounded-3xl ring-1 py-2 px-4 text-xs hover:bg-[var(--color-muted-green)] hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:contrast-150">Add to Cart</button>
                <Like product={product} updateSignInUser={updateSignInUser} />
            </div>
        </Link>
    );
}