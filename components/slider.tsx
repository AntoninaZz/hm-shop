"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const slides = [
    {
        id: 1,
        title: "New Arrivals!",
        description: "Our crochet toy collection has new adorable friends! Choose your perfect companion.",
        img: "/logo.jpg",
        url: "/",
        bg: "bg-linear-to-tr from-[var(--color-powder-pink)] to-[var(--color-milk)]"
    },
    {
        id: 2,
        title: "The Best Gift – a Handmade Toy",
        description: "Cozy, cute, and made with love – our toys make the perfect gift for both kids and adults.",
        img: "/logo.jpg",
        url: "/",
        bg: "bg-linear-to-tr from-[var(--color-muted-green)] to-[var(--color-milk)]"
    },
    {
        id: 3,
        title: "Every Toy is Handmade",
        description: "Our creations are crafted by the talented artisan Antonina, who puts her heart into every stitch.",
        img: "/slide3.jpg",
        url: "/",
        bg: "bg-linear-to-tr from-[var(--color-light-beige)] to-[var(--color-milk)]"
    }
];

export const Slider = () => {
    const [current, setCurrent] = useState(0);
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className={`w-max h-full flex transition-all ease-in-out duration-1000 -translate-x-[${current * 100}vw]`}>
                {slides.map((slide) => (
                    <div key={slide.id} className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}>
                        <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center px-8">
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-[var(--foreground)] text-[var(--color-milk)] py-3 px-4 cursor-pointer">SHOP NOW</button>
                            </Link>
                        </div>
                        <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                            <Image src={slide.img} alt={slide.title} fill sizes="100%" className="object-cover" />
                        </div>
                    </div>
                ))}
                <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                    {slides.map((slide, i) => (
                        <div key={slide.id} className={`w-2 h-2 rounded-full cursor-pointer ${current === i ? 'bg-[var(--foreground)]' : 'bg-[var(--color-muted-green)]'}`} onClick={() => setCurrent(i)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}