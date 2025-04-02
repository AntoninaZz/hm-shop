import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Marmelad } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const marmelad = Marmelad({
  variable: "--font-marmelad",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "HM-Shop",
  description: "Online shop of handmade crochet toys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${marmelad.variable}`}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
