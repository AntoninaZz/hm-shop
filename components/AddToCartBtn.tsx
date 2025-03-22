export const AddToCartBtn = () => {
    return(
        <button className="w-max rounded-2xl ring-1 ring-[var(--color-muted-green)] text--[var(--color-muted-green)] py-2 px-4 text-xs hover:bg-[var(--color-muted-green)] hover:text-white cursor-pointer disabled:cursor-not-allowed disabled:contrast-150">Add to Cart</button>
    );
}