"use client"
import Image from "next/image";

export const NavIcons = () => {
    return (
        <div className="flex items-center gap-4 xl:gap-6">
            <Image src='/profile.svg' alt='profile' width={22} height={22} className="cursor-pointer"/>
            <Image src='/cart.svg' alt='profile' width={22} height={22} className="cursor-pointer"/>
        </div>
    );
}