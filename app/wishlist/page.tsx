"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getProductDetails } from "@/lib/actions/action";
import Loader from "@/components/Loader";
import { ProductList } from "@/components/ProductList";

const WishlistPage = () => {
    const { user } = useUser();
    const [loading, setLoading] = useState(true);
    const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
    const [wishlist, setWishlist] = useState<ProductType[]>([]);

    const getUser = async () => {
        try {
            const res = await fetch("api/users");
            const data = await res.json();
            setSignedInUser(data);
            setLoading(false);
        } catch (error) {
            console.log("[users_GET]", error);
        }
    }

    useEffect(() => {
        if (user) {
            getUser();
        }
    }, [user]);

    const getWishlistProducts = async () => {
        setLoading(true);
        if (!signedInUser) return;
        const wishlistProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
            const res = await getProductDetails(productId);
            return res;
        }));
        setWishlist(wishlistProducts);
        setLoading(false);
    }

    useEffect(() => {
        if (signedInUser) {
            getWishlistProducts();
        }
    }, [signedInUser]);

    const updateSignInUser = (updatedUser: UserType) => {
        setSignedInUser(updatedUser);
    }

    return loading ? <Loader /> : (
        <div className="page-padding">
            <h1 className="mt-12 text-xl font-semibold">Your Wishlist</h1>
            <ProductList products={wishlist} updateSignInUser={updateSignInUser} />
        </div>
    )
}

export default WishlistPage;
export const dynamic = "force-dynamic";