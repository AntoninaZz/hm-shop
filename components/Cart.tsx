"use client";
import { useState } from 'react';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import useCart from "@/lib/hooks/useCart";
import CartItem from "./CartItem";
import DeliveryField from './DeliveryField';

interface CartProps {
    className?: string;
}

export const Cart: React.FC<CartProps> = ({ className }) => {
    const router = useRouter();
    const { user } = useUser();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const customer = { clerkId: user?.id, name: firstName + ' ' + lastName, email: user?.emailAddresses[0].emailAddress, phone };
    const cart = useCart();
    const subtotal = cart.cartItems.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity * (100 - cartItem.item.discount) / 100, 0);
    const subtotalRounded = parseFloat(subtotal.toFixed(2));

    const placeOrder = async (e: React.FormEvent) => {
        e.preventDefault();
        if (phone.length < 14) {
            toast.error("Your phone number is missing some digits");
            return;
        }
        try {
            if (!user) {
                router.push("sign-in");
            } else {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
                    method: "POST",
                    body: JSON.stringify({ cartItems: cart.cartItems, customerInfo: customer, orderDetails: { shippingAddress: address, comment }, totalAmount: subtotalRounded }),
                });
                const order = await res.json();
                router.push(`/order_created?orderId=${order._id}`);
            }
        } catch (error) {
            console.log("[checkout_POST]", error);
        }
    }

    return (
        <div className={`flex gap-6 flex-col sm:flex-row`}>
            <div className={`flex flex-col gap-6 ${className}`}>
                <h1 className="text-xl">Cart</h1>
                {cart.cartItems.length === 0 ?
                    <p className="text-sm text-[var(--color-muted-green)]">Your cart is empty :(</p> :
                    <div className="flex flex-col gap-8">
                        {cart.cartItems.map((cartItem) => <CartItem key={`${cartItem.item._id}${cartItem.color}${cartItem.size}`} cartItem={cartItem} />)}
                    </div>
                }
                <div>
                    <div className="flex items-center justify-between font-semibold">
                        <span>Total</span>
                        <span>{subtotalRounded.toFixed(2)}₴</span>
                    </div>
                    <p className="text-[var(--color-muted-green)] text-sm mt-2 mb-4">
                        Delivery is carried out according to the carrier&apos;s rates.
                    </p>
                </div>
            </div>
            <div className="w-full page-padding">
                <form className='flex flex-col gap-6' onSubmit={placeOrder}>
                    <h1 className="text-xl">Order Details</h1>
                    <input type="text" name="firstName" placeholder="First Name" className="flex-1 outline-none placeholder-[var(--color-muted-green)]" onChange={(e) => setFirstName(e.target.value)} required />
                    <input type="text" name="lastName" placeholder="Last Name" className="flex-1 outline-none placeholder-[var(--color-muted-green)]" onChange={(e) => setLastName(e.target.value)} required />
                    <input type="tel" name="phone" placeholder="Phone" className="flex-1 outline-none placeholder-[var(--color-muted-green)]"
                        onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
                            // Apply masking based on the number of digits
                            if (value.length > 10) {
                                value = value.substring(0, 10); // Limit to 10 digits for a typical US format
                            }
                            if (value.length > 6) {
                                value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`;
                            } else if (value.length > 3) {
                                value = `(${value.substring(0, 3)}) ${value.substring(3)}`;
                            } else if (value.length > 0) {
                                value = `(${value.substring(0, 3)}`;
                            }
                            e.target.value = value;
                            setPhone(e.target.value);
                        }} required />
                    <div className='relative'>
                        <input type="text" name="address" value={address} onChange={() => { }} required className='absolute outline-0 text-white' />
                        <DeliveryField value={address} onChange={setAddress} />
                    </div>
                    <input type="text" name="comment" placeholder="Comment" className="flex-1 outline-none placeholder-[var(--color-muted-green)]" onChange={(e) => setComment(e.target.value)} />
                    <button disabled={cart.cartItems.length == 0} type="submit" className="rounded-md py-3 px-4 bg-[var(--color-olive-gray)] hover:bg-[var(--color-muted-green)] cursor-pointer text-[var(--background)]">Place Order</button>
                </form>
            </div>
        </div>
    );
}