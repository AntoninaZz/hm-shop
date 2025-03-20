import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/logo.jpg' alt='logo' width={75} height={75} className="rounded-full m-4" />
        </Link>
    );
}