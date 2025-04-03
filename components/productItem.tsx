"use client";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Heart } from 'lucide-react';
import { AddToCartBtn } from "./AddToCartBtn";

interface ProductItemProps {
    product: ProductType;
}
export const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
    const user = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [signedInUser, setSignedInUser] = useState<UserType | null>(null);

    const getUser = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/users');
            const data = await res.json();
            setSignedInUser(data);
            setIsLiked(data.wishlist.includes(product._id));
            setLoading(false);
        } catch (error) {
            console.log("[getUser]", error);
        }
    }

    useEffect(() => {
        if (user) {
            getUser();
        }
    }, [user]);

    const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            if (!user.isSignedIn) {
                router.push("/sign-in");
                return;
            } else {
                setLoading(true);
                const res = await fetch('/api/users/wishlist', {
                    method: "POST",
                    body: JSON.stringify({ productId: product._id }),
                });
                const updatedUser = await res.json();
                setSignedInUser(updatedUser);
                setIsLiked(updatedUser.wishlist.includes(product._id));
                setLoading(false);
            }
        } catch (error) {
            console.log("[handleLike]", error);
        }
    }

    return (
        <Link href={`products/${product._id}`} className="w-full flex flex-col gap-4 md:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
                <Image src={product.media[0]} alt={product.name} fill sizes="25vw" className="absolute object-cover rounded-md z-1 hover:opacity-0 transition-opacity ease-in duration-500" />
                <Image src={product.media[product.media.length - 1]} alt={product.name} fill sizes="25vw" className="absolute object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4">
                <span className="font-medium text-nowrap overflow-hidden text-ellipsis">{product.name}</span>
                <span className="font-semibold">{product.price}$</span>
            </div>
            <div className="text-sm text-[var(--color-muted-green)]">{product.numberInStock > 0 ? 'available' : 'unavailable'}</div>
            <div className="flex items-center justify-between gap-4">
                <AddToCartBtn />
                <button type="button" onClick={handleLike} className="hover:text-[var(--color-powder-pink)] cursor-pointer">
                    <Heart fill={`${isLiked ? 'var(--color-powder-pink)' : 'white'}`} className={`text-${isLiked ? '[var(--color-powder-pink)]' : '[var(--color-olive-gray)]'}`} />
                </button>
            </div>
        </Link>
    );
}