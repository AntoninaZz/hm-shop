"use client";
import Image from "next/image";
import { useState } from "react";
const images = [
    { id: 1, src: '/slide2.jpg', alt: 'product' },
    { id: 2, src: '/slide1.jpg', alt: 'product' },
    { id: 3, src: '/slide3.jpg', alt: 'product' },
    { id: 4, src: '/logo.jpg', alt: 'product' },
];
export const ProductImages = () => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative">
                <Image src={images[index].src} alt={images[index].alt} fill sizes='50vw' className="object-cover rounded-md" />
            </div>
            <div className="flex justify-between gap-4">
                {images.map((img, i) => (
                    <div key={img.id} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" onClick={() => setIndex(i)}>
                        <Image src={img.src} alt={img.alt} fill sizes='30vw' className="object-cover rounded-md" />
                    </div>
                ))}
            </div>
        </div>
    );
}