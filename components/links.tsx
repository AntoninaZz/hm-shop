import Link from "next/link";

export const Links = () => {
    return (<>
        <Link href='/'>Home</Link>
        <Link href='/products'>Shop</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact Us</Link>
    </>);
}