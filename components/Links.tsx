"use client";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

interface LinksProps {
    onLinkClick?: () => void;
}

export const Links: React.FC<LinksProps> = ({ onLinkClick }) => {
    const { user } = useUser();
    const path = usePathname();
    return (<>
        {navLinks.map((link, i) => {
            return (
                <Link key={i} href={(link.url.includes('wishlist') || link.url.includes('orders')) && !user ? "/sign-in" : link.url} onClick={onLinkClick} className={`hover:opacity-50 ${path === link.url ? 'opacity-50' : ''}`} >
                    {link.label}
                </Link>
            );
        })}
    </>);
}