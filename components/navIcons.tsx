"use client";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Cart } from "./Cart";
import useCart from '@/lib/hooks/useCart';

export const NavIcons = () => {
    const cart = useCart();
    const router = useRouter();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <div className="relative cursor-pointer" onClick={() => {
                if (width >= 500) {
                    setIsCartOpen(!isCartOpen);
                    setIsProfileOpen(false);
                } else {
                    router.push('/cart');
                }
            }} >
                <Image src='/cart.svg' alt='profile' width={22} height={22} />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[var(--color-powder-pink)] rounded-full text-sm flex items-center justify-center">{cart.cartItems.length}</div>
            </div>
            {isCartOpen && width >= 500 && (
                <Cart className='absolute w-max p-4 top-12 right-0 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-2 bg-white' />
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
                        <SignUpButton className="w-32 rounded-3xl bg-[var(--color-muted-green)] text-white py-2 px-4 text-xs hover:bg-[var(--color-olive-gray)] cursor-pointer text-center" />
                        <div className='text-xs text-center text-[var(--color-muted-green)]'>You can log in into existing account or sign up if you {"don't"} have one</div>
                    </SignedOut>
                </div>
            )}
        </div>
    );
}