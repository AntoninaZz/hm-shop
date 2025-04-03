"use client";
import { useState } from "react";
import { AddToCartBtn } from "./AddToCartBtn";

interface AddProps {
    numberInStock: number,
}

export const Add: React.FC<AddProps> = ({ numberInStock }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type: "inc" | "dec") => {
        if (type === "dec" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === "inc" && quantity < numberInStock) {
            setQuantity(quantity + 1);
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-[var(--color-milk)] py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button onClick={() => handleQuantity("dec")} className="cursor-pointer text-xl">-</button>
                        {quantity}
                        <button onClick={() => handleQuantity("inc")} className="cursor-pointer text-xl">+</button>
                    </div>
                    <div className="text-xs">Only <span className="text-[var(--color-muted-green)]">{numberInStock} items</span> left! <br /> {"Don't"} miss it</div>
                </div>
                <AddToCartBtn />
            </div>
        </div>
    );
}