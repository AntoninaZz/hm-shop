"use client"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from "next/image";
import { useState } from "react";
import { CartModal } from "./CartModal";

export const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
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
            <SignedOut>
                <Image src='/profile.svg' alt='profile' width={22} height={22} className="cursor-pointer" onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsCartOpen(false);
                }} />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-1 bg-white flex flex-col items-center justify-between gap-4">
                    <SignedOut>
                        <SignInButton className="w-32 rounded-3xl ring-1 ring-[var(--color-muted-green)] text-[var(--color-muted-green)] py-2 px-4 text-xs hover:bg-[var(--color-muted-green)] hover:text-white cursor-pointer text-center" />
                        <SignUpButton className="w-32 rounded-3xl bg-[var(--color-muted-green)] text-white py-2 px-4 text-xs hover:bg-[var(--foreground)] cursor-pointer text-center" />
                        <div className='text-xs text-center text-[var(--color-muted-green)]'>You can log in into existing account or sign up if you {"don't"} have one</div>
                    </SignedOut>
                </div>
            )}
        </div>
    );
}