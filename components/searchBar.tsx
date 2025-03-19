"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const search = data.get("search") as string;

        if (search) {
            router.push(`/products?search=${search}`);
        }
    }

    return (
        <form className="flex justify-between gap-4 bg-gray-100 rounded-md p-2 flex-1" onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Search" className="flex-1 outline-none" />
            <button className="cursor-pointer">
                <Image src="/search.svg" alt="search" width={16} height={16} />
            </button>
        </form>
    );
}