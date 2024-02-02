import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenue from "./NavMenu";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim Alshubaily",
  description: "Personal Portflio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavMenue />
        <hr />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
