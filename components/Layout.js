import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Include the font weights you need
  style: "normal",
});

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <main className='blog-layout__container'>{children}</main>
    </div>
  );
}
