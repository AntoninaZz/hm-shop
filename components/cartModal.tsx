"use client";
import useCart from "@/lib/hooks/useCart";
import { CartItem } from "./CartItem";

export const CartModal = () => {
    const cart = useCart();
    const subtotal = cart.cartItems.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity * (100 - cartItem.item.discount) / 100, 0);
    const subtotalRounded = parseFloat(subtotal.toFixed(2));
    return (
        <div className="absolute w-max p-4 rounded-md top-12 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-2 flex flex-col gap-6 bg-white">
            <h1 className="text-xl">Shopping cart</h1>
            {cart.cartItems.length === 0 ?
                <p className="text-sm text-[var(--color-muted-green)]">The cart is empty :(</p> :
                <div className="flex flex-col gap-8">
                    {cart.cartItems.map((cartItem) => <CartItem key={cartItem.item._id} product={cartItem.item} quantity={cartItem.quantity} />)}
                </div>
            }
            <div>
                <div className="flex items-center justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>{subtotalRounded}$</span>
                </div>
                <p className="text-[var(--color-muted-green)] text-sm mt-2 mb-4">
                    Shipping and taxes calculated at chekout.
                </p>
                <div className="flex justify-between text-sm">
                    <button className="rounded-md py-3 px-4 ring-1 ring-[var(--color-muted-green)] cursor-pointer">View Cart</button>
                    <button className="rounded-md py-3 px-4 bg-[var(--color-olive-gray)] hover:bg-[var(--color-muted-green)] cursor-pointer text-[var(--background)]">Chekout</button>
                </div>
            </div>
        </div>
    );
}