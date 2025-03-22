export const CustomizeProduct = () => {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[var(--color-powder-pink)]">
                    <div className="absolute w-10 h-10 rounded-full ring-2 ring-[var(--color-muted-green)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-pointer relative bg-[var(--color-muted-green)]"></li>
                <li className="w-8 h-8 rounded-full ring-1 ring-[var(--color-light-beige)] cursor-not-allowed relative bg-white">
                    <div className="absolute w-10 h-[2px] bg-[var(--color-powder-pink)] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>
            </ul>
            <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-[var(--color-muted-green)] text-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">Small</li>
                <li className="ring-1 ring-[var(--color-muted-green)] text-white bg-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm cursor-pointer">Medium</li>
                <li className="ring-1 ring-[var(--color-muted-green)] text-[var(--color-muted-green)] rounded-md py-1 px-4 text-sm contrast-150 cursor-not-allowed">Large</li>
            </ul>
        </div>
    );
}