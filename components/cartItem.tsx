import Image from "next/image";
import { Trash2 } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

export const CartItem = ({ cartItem }: { cartItem: { item: ProductType, quantity: number, color?: string, size?: string } }) => {
    const cart = useCart();
    const variant = cartItem.item.variants.find(
        variant => variant.color === cartItem.color && variant.size === cartItem.size
    );
    const stock = variant?.numberInStock ?? 0;
    return (
        <div className="flex gap-4">
            <Image src={cartItem.item.media[0]} alt={cartItem.item.name} width={72} height={96} className="object-cover rounded-md aspect-square" />
            <div className="flex flex-col justify-between w-full">
                <div>
                    <div className="flex items-center justify-between gap-8">
                        <h2 className="font-semibold">{cartItem.item.name}</h2>
                        <div className="p-1 bg-[var(--color-milk)] rounded-sm">{(Math.round(cartItem.item.price * (100 - cartItem.item.discount)) / 100).toFixed(2)}₴</div>
                    </div>
                    <p className="flex gap-2 items-center text-xs text-[var(--color-muted-green)]"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: cartItem.color }}></div>{cartItem.size}</p>
                </div>
                <div className="flex justify-between text-sm">
                    <div className="bg-[var(--color-milk)] px-4 mt-1 rounded-3xl flex items-center justify-between gap-3">
                        <button onClick={() => { if (cartItem.quantity > 1) cart.decreaseQuantity(cartItem.item._id, cartItem.color, cartItem.size) }} className="cursor-pointer text-xl">-</button>
                        {cartItem.quantity}
                        <button onClick={() => { if (cartItem.quantity < stock) cart.increaseQuantity(cartItem.item._id, cartItem.color, cartItem.size) }} className="cursor-pointer text-xl">+</button>
                    </div>
                    <Trash2 className="text-[var(--color-powder-pink)] cursor-pointer" onClick={() => cart.removeItem(cartItem.item._id, cartItem.color, cartItem.size)} />
                </div>
            </div>
        </div>
    );
}