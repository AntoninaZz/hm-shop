import Link from "next/link";
import Image from "next/image";
import { Menu } from "./menu";

export const Navbar = () => {
    return <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="h-full flex items-center justify-between">
            <Link href='/'>
                <Image src='/logo.jpg' alt='logo' width={120} height={120} />
            </Link>
            {/* <div>
                <Link href='/'>Home</Link>
                <Link href='/products'>Shop</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact Us</Link>
            </div> */}
            <Menu />
        </div>
    </nav>;
}