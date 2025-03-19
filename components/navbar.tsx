import Link from "next/link";
import Image from "next/image";
import { Menu } from "./menu";
import { Links } from "./links";

export const Navbar = () => {
    return <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="h-full flex items-center justify-between">
            <Link href='/'>
                <Image src='/logo.jpg' alt='logo' width={120} height={120} />
            </Link>
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                <div className="w-1/3"><Links /></div>
                <div className="w-2/3"></div>
            </div>
            <Menu />
        </div>
    </nav>;
}