import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
    return <footer>
        <div>
            <Logo />
            <div>Welcome to our cozy world of handmade crochet toys! 💙💛 Each toy in our shop is crafted with love and care to bring joy and warmth. We create adorable animals, charming characters, and unique gifts that will become cherished friends for both little ones and grown-ups.</div>
            <div>
                <Link href='/'>Home</Link>
                <Link href='/about'>About us</Link>
                <Link href='/contact'>Contuct us</Link>
            </div>
            <div>
                <span>© 2025</span>
                <a href="https://antoninazz.github.io">Antonina Zdebska</a>
            </div>
        </div>
    </footer>;
}