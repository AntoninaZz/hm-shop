import Image from "next/image";

export const CartItem = () => {
    return (
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
                <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-muted-green)]">Qty. 2</span>
                    <Image src='/bin.svg' alt='remove' width={18} height={21} />
                </div>
            </div>
        </div>
    );
}