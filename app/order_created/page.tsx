'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { sha3_256 } from 'js-sha3';
import useCart from '@/lib/hooks/useCart';

const OrderCreatedPage = () => {
    const cart = useCart();
    useEffect(() => {
        cart.clearCart();
    }, []);
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const json_string = JSON.stringify({ public_key: process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY, version: 7, action: "pay", amount: 200.00, currency: "UAH", description: `Order ${orderId}`, order_id: `${orderId}` });
    const data = btoa(json_string);
    const sign_string = process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY + data + process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY;
    const signature = btoa(sha3_256(sign_string));
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-5 page-padding'>
            <p className='text-xl'>Your order №{orderId} is successfully registered</p>
            <p className='text-[var(--color-muted-green)]'>Pay for your order and it will ne delivered to you as soon as possible.</p>

            <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
                <input type="hidden" name="data" value={data} />
                <input type="hidden" name="signature" value={signature} />
                <input type="image" src="//static.liqpay.ua/buttons/payUk.png" />
            </form>

            <p className='text-[var(--color-muted-green)]'>Thank you for shopping at our store!</p>
        </div>
    )
}

export default OrderCreatedPage;
export const dynamic = "force-dynamic";