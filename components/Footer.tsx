import { Logo } from "./Logo";
import { Links } from "./Links";

const Footer = () => {
    return <footer className="py-10 sm:py-24 page-padding bg-[var(--color-milk)] text-sm mt-24">
        <div className="flex justify-between gap-5 md:gap-24 flex-col md:flex-row">
            <div className="flex flex-col gap-8 w-full md:w-1/8">
                <Logo />
            </div>
            <div className="w-1/8 hidden lg:flex flex-col justify-between items-center">
                <Links />
            </div>
            <div className="w-full md:w-7/8 lg:w-3/4">
                <p>Welcome to our cozy world of handmade crochet toys! 💙💛 Each toy in our shop is crafted with love and care to bring joy and warmth. We create adorable animals, charming characters, and unique gifts that will become cherished friends for both little ones and grown-ups.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 sm:mt-16 text-[var(--color-muted-green)]">
            <span>© 2025</span>
            <a href="https://antoninazz.github.io">Antonina Zdebska</a>
        </div>
    </footer>;
}

export default Footer;