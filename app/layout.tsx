import type { Metadata } from "next";
import { Marmelad } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const marmelad = Marmelad({
  variable: "--font-marmelad",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "HM-shop",
  description: "Online shop of handmade crochet toys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marmelad.variable} px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
