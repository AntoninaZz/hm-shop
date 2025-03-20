"use client"
import Image from "next/image";
import { useState } from "react";
import { CartModal } from "./cartModal";

export const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src='/profile.svg' alt='profile' width={22} height={22} className="cursor-pointer" onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsCartOpen(false);
            }} />
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-1">profile open</div>
            )}
            <div className="relative cursor-pointer">
                <Image src='/cart.svg' alt='profile' width={22} height={22} onClick={() => {
                    setIsCartOpen(!isCartOpen);
                    setIsProfileOpen(false);
                }} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[var(--color-powder-pink)] rounded-full text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && (
                <CartModal />
            )}
        </div>
    );
}