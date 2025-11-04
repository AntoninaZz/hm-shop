"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Links } from "./Links";
import { NavIcons } from "./NavIcons";

export const Menu = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return <div ref={menuRef}>
        <Image src="/menu.svg" alt='menu' width={28} height={28} className="cursor-pointer" onClick={() => setOpen(!open)} />
        {open && (
            <div className="absolute top-20 sm:top-27 right-0 w-2/3 h-[calc(100vh-80px)] flex flex-col items-center gap-y-8 pt-8 bg-white z-3">
                <NavIcons onClick={() => setOpen(false)} />
                <Links onLinkClick={() => setOpen(false)} />
            </div>
        )}
    </div>;
}