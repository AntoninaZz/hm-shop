import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { getOrders } from "@/lib/actions/action";

const OrdersPage = async () => {
    const { userId } = await auth();
    const orders = await getOrders(userId as string);
    return (
        <div className="page-padding min-h-[400px]">
            <h1 className="mt-12 text-xl font-semibold mb-5">Your Orders</h1>
            {(!orders || orders.length === 0) && <p className="text-sm text-[var(--color-muted-green)] mt-5">You have no orders yet.</p>}
            {orders.length > 0 && <div className="flex flex-col max-sm:gap-10">
                <div className="flex justify-between gap-2 p-4 bg-[var(--color-muted-green)] rounded-md max-sm:hidden">
                    <p className="font-bold w-1/3">Order ID</p>
                    <p className="font-bold w-1/3 text-center">Products</p>
                    <p className="font-bold w-1/3 text-right">Total Amount</p>
                </div>
                {orders.map((order: OrderType) =>
                    <div key={order._id} className="flex max-sm:flex-col justify-between items-center gap-2 sm:p-4 hover:bg-[var(--color-milk)] rounded-sm">
                        <p className="sm:w-1/3"><span className="font-bold sm:hidden">Order ID: </span>{order._id}</p>
                        <div className="flex flex-col gap-4 sm:w-1/3"><span className="font-bold sm:hidden">Products: </span>{
                            order.products.map((item: OrderItemType) =>
                                <div key={item.product._id} className="flex gap-4 max-sm:min-w-3xs">
                                    <Image src={item.product.media[0]} alt={item.product.name} width={100} height={100} className="w-18 h-18 object-cover rounded-md" />
                                    <div className="flex flex-col justify-between">
                                        <p>{item.product.name}</p>
                                        <p className="text-sm">{Math.round(item.product.price * (100 - item.product.discount) / 100).toFixed(2)}₴{item.quantity > 1 ? ' x ' + item.quantity : ''}</p>
                                        <p className="flex items-center gap-2 text-sm text-[var(--color-muted-green)]">
                                            {item.color && <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.color }}></div>}
                                            {item.size && <span>{item.size}</span>}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <p className="sm:w-1/3 text-center sm:text-right"><span className="font-bold sm:hidden">Total Amount: </span>{order.totalAmount.toFixed(2)}₴</p>
                    </div>
                )}
            </div>}
        </div>
    )
}

export default OrdersPage;
export const dynamic = "force-dynamic";