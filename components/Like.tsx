"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface LikeProps {
    product: ProductType;
    updateSignInUser?: (updatedUser: UserType) => void;
}

const Like = ({ product, updateSignInUser }: LikeProps) => {
    const { isSignedIn } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const { data: userData, mutate } = useSWR(
        isSignedIn ? "/api/users" : null,
        fetcher,
        { dedupingInterval: 60000 } // кеш 1 хвилина
    );

    useEffect(() => {
        if (userData) {
            setIsLiked(userData.wishlist?.includes(product._id));
        }
    }, [userData, product._id]);

    const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!isSignedIn) {
            router.push("/sign-in");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('/api/users/wishlist', {
                method: "POST",
                body: JSON.stringify({ productId: product._id }),
            });
            const updatedUser = await res.json();
            mutate(updatedUser, false); // оновлюємо кеш користувача, не роблячи новий fetch
            setIsLiked(updatedUser.wishlist.includes(product._id));
            if (updateSignInUser) updateSignInUser(updatedUser);
        } catch (error) {
            console.log("[handleLike]", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <button type="button" onClick={handleLike} disabled={loading} className="hover:text-[var(--color-powder-pink)] cursor-pointer">
            <Heart fill={`${isLiked ? 'var(--color-powder-pink)' : 'white'}`} className={`text-${isLiked ? '[var(--color-powder-pink)]' : '[var(--color-olive-gray)]'}`} />
        </button>
    )
}

export default Like;