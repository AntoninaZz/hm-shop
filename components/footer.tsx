import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return <footer>
        <div>
            <Link href='/'>
                <Image src='/logo.jpg' alt='logo' width={120} height={120} />
            </Link>
            <div>Welcome to our cozy world of handmade crochet toys! 💙💛 Each toy in our shop is crafted with love and care to bring joy and warmth. We create adorable animals, charming characters, and unique gifts that will become cherished friends for both little ones and grown-ups.</div>
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About us</Link>
                <Link href='/contact'>Contuct us</Link>
            </div>
            <div>
                <a href="https://antoninazz.github.io">Antonina Zdebska</a>
                <span>© 2025</span>
            </div>
        </div>
    </footer>;
}