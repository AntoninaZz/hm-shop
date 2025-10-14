import Link from "next/link";

const SuccessfulPaymentPage = () => {
    return (
        <div className='min-h-[400px] flex flex-col justify-center items-center gap-5 page-padding'>
            <p className='text-xl'>Successful Payment</p>
            <p className='text-[var(--color-muted-green)] text-center'>Thank you for shopping at our store!
                <br />We will send you your order as soon as possible.</p>
            <Link href='/'>
                <button className="rounded-md py-3 px-4 bg-[var(--color-olive-gray)] hover:bg-[var(--color-muted-green)] cursor-pointer text-[var(--background)]">Back to shopping</button>
            </Link>
        </div>
    )
}

export default SuccessfulPaymentPage;