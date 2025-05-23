"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    media: string[],
}

export const ProductImages: React.FC<ProductImagesProps> = ({ media }) => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="h-[500px] relative">
                <Image src={media[index]} alt={media[index]} fill sizes='50vw' className="object-cover rounded-md" />
            </div>
            <div className="flex gap-4">
                {media.map((img, i) => (
                    <div key={i} className={`w-1/4 h-32 relative gap-4 mt-8 cursor-pointer`} onClick={() => setIndex(i)}>
                        <Image src={img} alt={img} fill sizes='30vw' className={`object-cover rounded-md ${index === i ? 'border-3 border-[var(--color-light-beige)]' : ''}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}