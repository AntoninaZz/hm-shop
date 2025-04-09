"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Slider = ({ slides }: { slides: BannerType[] }) => {
    const [current, setCurrent] = useState(0);
    const gradientColors = ['--color-muted-green', '--color-light-beige', '--color-powder-pink', '--color-milk'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div style={{ transform: `translateX(-${current}00vw)` }} className={`w-max h-full flex transition-all ease-in-out duration-1000`}>
                {slides.map((slide) => (
                    <div key={slide._id} style={{ background: `linear-gradient(45deg, var(${gradientColors[3 - slide.description.length % 4]}), var(${gradientColors[slide.description.length % 4]}))` }} className={`w-screen h-full flex flex-col gap-16 xl:flex-row`}>
                        <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center px-8">
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-[var(--color-olive-gray)] text-[var(--color-milk)] py-3 px-4 cursor-pointer">{slide.url.includes('products') ? 'SHOP NOW' : 'MORE'}</button>
                            </Link>
                        </div>
                        <div className="h-1/2 xl:h-full xl:w-1/2 relative">
                            <Image src={slide.image} alt={slide.title} fill sizes="100%" className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, i) => (
                    <div key={slide._id} className={`w-2 h-2 rounded-full cursor-pointer ${current === i ? 'bg-[var(--color-olive-gray)]' : 'bg-[var(--color-muted-green)]'}`} onClick={() => setCurrent(i)}></div>
                ))}
            </div>
        </div>
    );
}