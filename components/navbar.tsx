import { Menu } from "./menu";
import { SearchBar } from "./searchBar";
import { Links } from "./links";
import { NavIcons } from "./navIcons";
import { Logo } from "./logo";

export const Navbar = () => {
    return <nav className="h-20 relative">
        {/* small screen navbar */}
        <div className="h-full flex items-center justify-between md:hidden"><Logo /><Menu /></div>
        {/* medium screen navbar */}
        <div className="hidden md:flex items-center justify-between gap-8">
            <div className="w-1/3"><Logo /></div>
            <div className="w-2/3 flex items-center justify-between gap-8">
                <SearchBar />
                <NavIcons />
            </div>
        </div>
        {/* large screen navbar */}
        <Links />
    </nav>;
}