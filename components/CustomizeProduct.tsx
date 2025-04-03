"use client";
import { useState } from "react";

interface CustomizeProductProps {
    colors: string[],
    sizes: string[],
}

export const CustomizeProduct: React.FC<CustomizeProductProps> = ({ colors, sizes }) => {
    const [chosenColor, setChosenColor] = useState(0);
    const [chosenSize, setChosenSize] = useState(0);
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className="flex items-center gap-3">
                {colors.map((color, i) => {
                    if (i === chosenColor) {
                        return (<li key={i} className={`w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[${color}]`}>
                            <div className="absolute w-10 h-10 rounded-full ring-2 ring-[var(--color-muted-green)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </li>);
                    } else {
                        return <li key={i} onClick={() => setChosenColor(i)} className={`w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[${color}]`}></li>
                    }
                })}
            </ul>
            <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                {sizes.map((size, i) => {
                    if (i === chosenSize) {
                        return (<li key={i} className="ring-1 ring-[var(--color-muted-green)] text-white bg-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">{size}</li>);
                    } else {
                        return (<li key={i} onClick={() => setChosenSize(i)} className="ring-1 ring-[var(--color-muted-green)] text-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">{size}</li>);
                    }
                })}
            </ul>
        </div>
    );
}