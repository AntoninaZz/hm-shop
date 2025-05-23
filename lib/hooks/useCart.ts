import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem {
    item: ProductType;
    quantity: number;
    color?: string;
    size?: string;
}

interface CartStore {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (idToRemove: string) => void;
    increaseQuantity: (idToIncrease: string) => void;
    decreaseQuantity: (idToDecrease: string) => void;
    clearCart: () => void;
}

const useCart = create(persist<CartStore>(
    (set, get) => ({
        cartItems: [],
        addItem: (data: CartItem) => {
            const { item, quantity, color, size } = data;
            const currentItems = get().cartItems;
            const existingItem = currentItems.find((cartItem) => cartItem.item._id === item._id);
            if (existingItem) {
                return toast('Item ia already in cart', { icon: '🛒' });
            }
            set({ cartItems: [...currentItems, { item, quantity, color, size }] });
            toast.success('Item added to cart', { icon: '🛒' });
        },
        removeItem: (idToRemove: string) => {
            const newCartItems = get().cartItems.filter((cartItem) => cartItem.item._id !== idToRemove);
            set({ cartItems: newCartItems });
            toast.success('Item removed from cart', { icon: '🛒' });
        },
        increaseQuantity: (idToIncrease: string) => {
            const newCartItems = get().cartItems.map((cartItem) => cartItem.item._id === idToIncrease ?
                { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
            set({ cartItems: newCartItems });
            toast.success('Item quantity increased');
        },
        decreaseQuantity: (idToDecrease: string) => {
            const newCartItems = get().cartItems.map((cartItem) => cartItem.item._id === idToDecrease ?
                { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
            set({ cartItems: newCartItems });
            toast.success('Item quantity decreased');
        },
        clearCart: () => {
            set({ cartItems: [] });
        }
    }),
    {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
    }
));

export default useCart;