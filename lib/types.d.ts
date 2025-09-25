type CategoryType = {
    _id: string;
    name: string;
    description: string;
    image: string;
    products: ProductType[];
}

type BannerType = {
    _id: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

type ProductType = {
    _id: string;
    name: string;
    description: string;
    media: [string];
    category: [CategoryType];
    tags: [string];
    sizes: [string];
    colors: [string];
    price: number;
    expense: number;
    numberInStock: number;
    internalMaterial: [string];
    externalMaterial: [string];
    discount: number;
    createdAt: Date;
    updatedAt: Date;
}

type UserType = {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
};

type OrderType = {
    _id: string;
    customerClerkId: string;
    products: OrderItemType[];
    totalAmount: number;
    shippingAddress: string;
    comment: string;
    createdAt: Date;
};

type OrderItemType = {
    product: ProductType;
    color: string;
    quantity: number;
    size: string;
}