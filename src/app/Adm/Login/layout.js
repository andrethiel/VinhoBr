"use client";
import "../../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }) {
  return (
    <html lang="br">
      <body className={inter.className}>
        <section className="h-screen">
          <div className="container h-full py-24">
            <div className="g-7 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://www.vinhobr.com.br/produtos/vinhobr.webp"
                  className="mx-auto w-1/2"
                />
              </div>
              {children}
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
