import { Menu } from "./Menu";
import { SearchBar } from "./SearchBar";
import { Links } from "./Links";
import { NavIcons } from "./NavIcons";
import { Logo } from "./Logo";

export const Navbar = () => {
    return <nav className="h-27 relative page-padding">
        {/* small screen navbar */}
        <div className="h-full flex items-center justify-between md:hidden"><Logo /><Menu /></div>
        {/* medium screen navbar */}
        <div className="hidden md:flex items-center justify-between gap-8">
            <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                <Logo />
                <div className="hidden xl:flex gap-4"><Links /></div>
            </div>
            <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                <SearchBar />
                <NavIcons />
            </div>
        </div>
    </nav>;
}