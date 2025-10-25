'use client';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import useCart from '@/lib/hooks/useCart';
import Loader from '@/components/Loader';
import { getOrders } from '@/lib/actions/action';
import { useUser } from '@clerk/nextjs';

const OrderCreatedContent = () => {
    const cart = useCart();
    const { user } = useUser();
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderId');
    const [amount, setAmount] = useState<number | null>(null);
    const [liqpayData, setLiqpayData] = useState<{ data: string; signature: string } | null>(null);

    useEffect(() => {
        cart.clearCart();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!user || !orderId) return;
        (async () => {
            const orders = await getOrders(user.id as string);
            const order = orders.find((order: OrderType) => order._id == orderId);
            if (order?.totalAmount) setAmount(order.totalAmount);
        })();
    }, [user, orderId]);

    useEffect(() => {
        if (!orderId || !amount) return;
        (async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/liqpay`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    amount,
                    description: `Order ${orderId}`,
                }),
            });
            const data = await res.json();
            setLiqpayData(data);
        })();
    }, [orderId, amount]);

    if (!liqpayData) return <Loader />;

    return (
        <div className='min-h-[400px] flex flex-col justify-center items-center gap-5 page-padding'>
            <p className='text-xl'>Your order №{orderId} is successfully registered</p>
            <p className='text-[var(--color-muted-green)]'>Pay for your order and we will send it to you as soon as possible.</p>
            <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
                <input type="hidden" name="data" value={liqpayData.data} />
                <input type="hidden" name="signature" value={liqpayData.signature} />
                <input type="image" src="//static.liqpay.ua/buttons/payUk.png" alt="Pay" />
            </form>
        </div>
    )
}

export default function OrderCreatedPage() {
    return (
        <Suspense fallback={<Loader />}>
            <OrderCreatedContent />
        </Suspense>
    );
}

export const dynamic = "force-dynamic";