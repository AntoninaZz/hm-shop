import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="page-padding flex items-center justify-between gap-6">
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h1 className="mt-12 text-xl font-semibold">Welcome to our little corner of handmade joy! 💙💛</h1>
                <p>Every crochet toy here is crafted with love, care, and a sprinkle of magic. Antonina, the heart and hands behind our shop, brings every piece to life, ensuring it’s not only adorable but also filled with warmth and personality.</p>
                <p>Our shop is home to charming plush animals, tiny companions, and delightful keychains, all designed to bring smiles and brighten your day. Whether you’re searching for a cuddly friend, a thoughtful gift, or a sweet little charm to carry with you, we have something special just for you.</p>
                <p>We use safe, high-quality materials to create toys that feel wonderful to hold. Every tiny detail is lovingly handcrafted, making each piece truly one of a kind, with its own unique charm and soul.</p>
                <p>Thank you for being part of our story and sharing the magic of handmade creations! 💕</p>
            </div>
            <div className="hidden md:block relative w-1/2 h-[500px]">
                <Image src='/about.jpg' alt='hm-shop' fill sizes='50vw' className="object-cover rounded-md" />
            </div>
        </div>
    );
}