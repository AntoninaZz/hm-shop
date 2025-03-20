"use client";

import { CartItem } from "./cartItem";

export const CartModal = () => {
    return (
        <div className="absolute w-max p-4 rounded-md top-12 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-1 flex flex-col gap-6 bg-white">
            <h1>Shopping cart</h1>
            <div className="flex flex-col gap-8">
                <CartItem />
                <CartItem />
            </div>
            <div>
                <div className="flex items-center justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>45$</span>
                </div>
                <p className="text-[var(--color-muted-green)] text-sm mt-2 mb-4">
                    Shipping and taxes calculated at chekout. 
                </p>
                <div className="flex justify-between text-sm">
                    <button className="rounded-md py-3 px-4 ring-1 ring-[var(--color-muted-green)] cursor-pointer">View Cart</button>
                    <button className="rounded-md py-3 px-4 bg-[var(--foreground)] cursor-pointer text-[var(--background)]">Chekout</button>
                </div>
            </div>
        </div>
    );
}