"use client";
import { useState } from "react";
import Like from "@/components/Like";
import { ProductImages } from "@/components/ProductImages";
import useCart from "@/lib/hooks/useCart";

const ProductDetails = ({ productDetails }: { productDetails: ProductType }) => {
    const cart = useCart();
    const [chosenColor, setChosenColor] = useState(0);
    const [chosenSize, setChosenSize] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type: "inc" | "dec") => {
        if (type === "dec" && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (type === "inc" && quantity < productDetails.numberInStock) {
            setQuantity(quantity + 1);
        }
    }

    return (
        <div className="page-padding flex flex-col lg:flex-row gap-16 relative">
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages media={productDetails.media} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h1 className="text-4xl font-medium">{productDetails.name}</h1>
                    <p className="text-sm text-[var(--color-muted-green)]">{productDetails.category.map((cat) => cat.name).join(', ')}</p>
                </div>
                <p>{productDetails.description}</p>
                <hr className="text-[var(--color-muted-green)]" />
                <div className="flex items-center gap-4">
                    {productDetails.discount > 0 && (<div className="relative">
                        <h3 className="text-xl text-[var(--color-powder-pink)] line-through">{productDetails.price}$</h3>
                        <p className="absolute left-10 bottom-5 rounded-md px-1 bg-[var(--color-powder-pink)] text-white">-{productDetails.discount}%</p>
                    </div>)}
                    <h2 className="font-medium text-2xl">{Math.round(productDetails.price * (100 - productDetails.discount)) / 100}$</h2>
                </div>
                <hr className="text-[var(--color-muted-green)]" />
                <div className="flex flex-col gap-6">
                    {productDetails.colors.length <= 0 ? <></> : <>
                        <h4 className="font-medium">Choose a color</h4>
                        <ul className="flex items-center gap-3">
                            {productDetails.colors.map((color, i) => {
                                if (i === chosenColor) {
                                    return (<li key={i} className={`w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[${color}]`}>
                                        <div className="absolute w-10 h-10 rounded-full ring-2 ring-[var(--color-muted-green)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    </li>);
                                } else {
                                    return <li key={i} onClick={() => setChosenColor(i)} className={`w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[${color}]`}></li>
                                }
                            })}
                        </ul>
                    </>}
                    {productDetails.sizes.length <= 0 ? <></> : <>
                        <h4 className="font-medium">Choose a size</h4>
                        <ul className="flex items-center gap-3">
                            {productDetails.sizes.map((size, i) => {
                                if (i === chosenSize) {
                                    return (<li key={i} className="ring-1 ring-[var(--color-muted-green)] text-white bg-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">{size}</li>);
                                } else {
                                    return (<li key={i} onClick={() => setChosenSize(i)} className="ring-1 ring-[var(--color-muted-green)] text-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">{size}</li>);
                                }
                            })}
                        </ul>
                    </>}
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-medium">Choose a Quantity</h4>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <div className="bg-[var(--color-milk)] py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                                <button onClick={() => handleQuantity("dec")} className="cursor-pointer text-xl">-</button>
                                {quantity}
                                <button onClick={() => handleQuantity("inc")} className="cursor-pointer text-xl">+</button>
                            </div>
                            <div className="text-xs">Only <span className="text-[var(--color-muted-green)]">{productDetails.numberInStock} items</span> left! <br /> {"Don't"} miss it</div>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => { cart.addItem({ item: productDetails, quantity: quantity, color: productDetails.colors[chosenColor], size: productDetails.sizes[chosenSize], }) }} className="w-32 rounded-3xl ring-1 py-2 px-4 text-xs hover:bg-[var(--color-muted-green)] hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:contrast-150">
                                Add to Cart
                            </button>
                            <Like product={productDetails} />
                        </div>
                    </div>
                </div>
                <hr className="text-[var(--color-muted-green)]" />
                <div className="text-sm">
                    <h4 className='font-medium mb-4 uppercase'>Description</h4>
                    <div className="flex flex-col gap-2">
                        {productDetails.externalMaterial.length <= 0 ? '' :
                            <div className="flex justify-between">
                                <p>External material</p>
                                <p>{productDetails.externalMaterial.join(', ')}</p>
                            </div>}
                        {productDetails.internalMaterial.length <= 0 ? '' :
                            <div className="flex justify-between">
                                <p>Internal material</p>
                                <p>{productDetails.internalMaterial.join(', ')}</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;