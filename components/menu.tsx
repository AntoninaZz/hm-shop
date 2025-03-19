"use client";

import { useState } from "react";
import Image from "next/image";
import { Links } from "./links";

export const Menu = () => {
    const [open, setOpen] = useState(false);

    return <div>
        <Image src="/menu.svg" alt='menu' width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
        {open && (
            <div className="absolute top-20 right-0 flex flex-col items-center justify-center gap-y-8 bg-[#FDF4EB] z-1">
                <Links />
            </div>
        )}
    </div>;
}