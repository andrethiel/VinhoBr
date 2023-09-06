"use client";
import "../../globals.css";
import { Inter } from "next/font/google";
import Menu from "@/app/Components/Menu";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="br">
      <Header />
      <body className={inter.className}>
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src="https://www.vinhobr.com.br/imagens_do_site/0A1181EA-93B7-4436-9FBE-0A0F6EE27C40.png"
                className="h-11 mr-3"
              />
            </a>
            <Menu />
          </div>
        </nav>
        <div className="container px-6 mx-auto sm:container sm:px-20 md:mx-auto md:px-20 lg:px-20 lg:mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
