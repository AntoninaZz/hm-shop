import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/logo.jpg' alt='logo' width={80} height={80} className="rounded-full" />
        </Link>
    );
}