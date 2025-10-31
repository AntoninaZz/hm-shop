"use client";
import Image from "next/image";

export const SearchBar = () => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const search = data.get("search") as string;
        if (search) {
            window.location.href = `/products?search=${search}`;
        }
    }

    return (
        <form className="flex justify-between gap-4 bg-[var(--color-milk)] rounded-md p-2 flex-1" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search" className="flex-1 outline-none placeholder-[var(--color-muted-green)]" />
            <button className="cursor-pointer">
                <Image src="/search.svg" alt="search" width={20} height={20} />
            </button>
        </form>
    );
}