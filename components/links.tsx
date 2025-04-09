"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

export const Links = () => {
    const path = usePathname();
    return (<>
        {navLinks.map((link, i) =>
            <Link key={i} href={link.url} className={`hover:opacity-50 ${path === link.url ? 'opacity-50' : ''}`} >
                {link.label}
            </Link>)}
    </>);
}