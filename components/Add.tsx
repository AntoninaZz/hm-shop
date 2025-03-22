import { AddToCartBtn } from "./AddToCartBtn";

export const Add = () => {
    return(
        <div className="flex flex-col gap-4">
            <h4 className="font-medium">Choose a Quantity</h4>
            <div></div>
            <AddToCartBtn />
        </div>
    );
}