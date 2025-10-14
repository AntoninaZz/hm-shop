import Image from "next/image";
import { Trash2 } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

export const CartItem = ({ product, quantity }: { product: ProductType, quantity: number }) => {
    const cart = useCart();
    return (
        <div className="flex gap-4">
            <Image src={product.media[0]} alt={product.name} width={72} height={96} className="object-cover rounded-md aspect-square" />
            <div className="flex flex-col justify-between w-full">
                <div>
                    <div className="flex items-center justify-between gap-8">
                        <h2 className="font-semibold">{product.name}</h2>
                        <div className="p-1 bg-[var(--color-milk)] rounded-sm">{(Math.round(product.price * (100 - product.discount)) / 100).toFixed(2)}₴</div>
                    </div>
                    <p className="text-xs text-[var(--color-muted-green)]">{product.category.map((cat) => cat.name).join(', ')}</p>
                </div>
                <div className="flex justify-between text-sm">
                    <div className="bg-[var(--color-milk)] px-4 mt-1 rounded-3xl flex items-center justify-between gap-3">
                        <button onClick={() => { if (quantity > 1) cart.decreaseQuantity(product._id) }} className="cursor-pointer text-xl">-</button>
                        {quantity}
                        <button onClick={() => { if (quantity < product.numberInStock) cart.increaseQuantity(product._id) }} className="cursor-pointer text-xl">+</button>
                    </div>
                    <Trash2 className="text-[var(--color-powder-pink)] cursor-pointer" onClick={() => cart.removeItem(product._id)} />
                </div>
            </div>
        </div>
    );
}