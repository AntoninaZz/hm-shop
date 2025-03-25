"use client";

import { useState } from "react";
import Image from "next/image";
import { Links } from "./Links";
import { NavIcons } from "./NavIcons";

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return <div>
        <Image src="/menu.svg" alt='menu' width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
        {open && (
            <div className="absolute top-27 right-0 w-1/2 h-[calc(100vh-108px)] flex flex-col items-center gap-y-8 bg-white z-3">
                <NavIcons />
                <Links />
            </div>
        )}
    </div>;
}