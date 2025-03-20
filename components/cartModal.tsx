"use client";
import Image from "next/image";

export const CartModal = () => {
    return (
        <div className="absolute w-max p-4 rounded-md top-12 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-1 flex flex-col gap-6 bg-white">
            <h1>Shopping cart</h1>
            <div className="flex gap-4">
                <Image src='/logo.jpg' alt='' width={72} height={96} className="object-cover rounded-md" />
                <div className="flex flex-col justify-between w-full">
                    <div>
                        <div className="flex items-center justify-between gap-8">
                            <h2 className="font-semibold">Product Name</h2>
                            <div className="p-1 bg-[var(--color-milk)] rounded-sm">45$</div>
                        </div>
                        <p className="text-sm text-[var(--color-muted-green)]">available</p>
                    </div>
                    <div>
                        <span>Qty. 2</span>
                        <span>Remove</span>
                    </div>
                </div>
            </div>
        </div>
    );
}