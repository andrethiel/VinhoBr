"use client";
import "../../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }) {
  return (
    <html lang="br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
