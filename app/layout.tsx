import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { KomerzaProvider } from "@/components/KomerzaProvider";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Blackstar | Digital Game Guide Store",
  description:
    "Blackstar game guide ebooks with instant access and secure checkout."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <KomerzaProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
