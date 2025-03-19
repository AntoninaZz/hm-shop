import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return <nav>
        <Link href='/'>
            <Image src='/logo.jpg' alt='logo' width={120} height={120} />
        </Link>
        <div>
            <Link href='/'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact Us</Link>
        </div>
    </nav>;
}