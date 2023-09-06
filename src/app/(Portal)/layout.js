"use client";
import "../globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "../Components/Footer";
import { PORTAL_LISTAR_PORTAL } from "../Api";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [navbar, setNavbar] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    const response = await PORTAL_LISTAR_PORTAL(true);
    console.log(response);
    if (response.sucesso) {
      setImage(response.dados.imagemPrincipal);
    }
  }

  return (
    <html lang="br">
      <body className={inter.className}>
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center">
              <img
                src="https://www.vinhobr.com.br/imagens_do_site/0A1181EA-93B7-4436-9FBE-0A0F6EE27C40.png"
                className="h-14 mr-3"
              />
            </a>
            <div className="flex lg:hidden md:hidden">
              {navbar ? (
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg border-2 border-[#d7006e] bg-[#d7006e]"
                  onClick={() => setNavbar(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg border-2 border-[#d7006e] bg-[#d7006e]"
                  onClick={() => setNavbar(true)}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}
            </div>
            <div
              className={`${!navbar ? "hidden" : ""} w-full md:block md:w-auto`}
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-2 lg:bg-white md:bg-white border-gray-600 bg-gray-600 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Vinhos"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Vinhos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Degustacao"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Degustação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Adm/Login"
                    className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                  >
                    Adminstração
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container px-6 sm:container sm:px-20 md:mx-auto md:px-20 lg:px-20 lg:mx-auto max-h-screen">
          <div className="flex justify-center items-center">
            <img
              src={image}
              className="w-[1375px] rounded-lg"
              style={{ maxHeight: "785px" }}
            />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
