"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

interface LikeProps {
    product: ProductType;
    updateSignInUser?: (updatedUser: UserType) => void;
}

const Like = ({ product, updateSignInUser }: LikeProps) => {
    const user = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const getUser = async () => {
        try {
            if (user.isSignedIn) {
                setLoading(true);
                const res = await fetch('/api/users');
                const data = await res.json();
                setIsLiked(data.wishlist.includes(product._id));
                setLoading(false);
            }
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
                setIsLiked(updatedUser.wishlist.includes(product._id));
                if (updateSignInUser) updateSignInUser(updatedUser);
                setLoading(false);
            }
        } catch (error) {
            console.log("[handleLike]", error);
        }
    }

    return (
        <button type="button" onClick={handleLike} className="hover:text-[var(--color-powder-pink)] cursor-pointer">
            <Heart fill={`${isLiked ? 'var(--color-powder-pink)' : 'white'}`} className={`text-${isLiked ? '[var(--color-powder-pink)]' : '[var(--color-olive-gray)]'}`} />
        </button>
    )
}

export default Like;