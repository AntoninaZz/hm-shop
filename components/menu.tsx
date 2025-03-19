"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return <div>
        <Image src="/menu.svg" alt='menu' width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
        {open && (
            <div className="absolute top-20 right-0 flex flex-col items-center justify-center gap-8 px-8">
                <Link href='/'>Home</Link>
                <Link href='/products'>Shop</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact Us</Link>
            </div>
        )}
    </div>;
}