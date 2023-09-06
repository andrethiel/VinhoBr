"use client";

import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [nome, setNome] = useState("");

  useEffect(() => {
    userName();
  }, []);

  function userName() {
    setNome(`Usuário: ${localStorage.getItem("nome")}`);
  }

  return (
    <>
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
      <div className={`${!navbar ? "hidden" : ""} w-full md:block md:w-auto`}>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-2 lg:bg-white md:bg-white border-gray-600 bg-gray-600 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link
              href="/Adm/Cadastro"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Adm/Listar/Portal"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Portal
            </Link>
          </li>
          <li>
            <Link
              href="/Adm/Listar/Vinhos"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Vinhos
            </Link>
          </li>
          <li>
            <Link
              href="/Adm/Listar/Degustacao"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Degustação
            </Link>
          </li>
          <li>
            <Link
              href="/Adm/Listar/Paises"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Paises
            </Link>
          </li>
          <li>
            <Link
              href="/Adm/Listar/Usuarios"
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
            >
              Usuários
            </Link>
          </li>
          <li>
            {menu ? (
              <button
                className="py-2 gap-4 pl-3 pr-4 inline-flex rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                onClick={() => setMenu(false)}
              >
                {nome}
                <ChevronUpIcon className="h-6 w-6" />
              </button>
            ) : (
              <button
                className="py-2 gap-4 pl-3 pr-4 inline-flex rounded md:bg-transparent md:p-0 text-white md:text-zinc-950 lg:text-zinc-950"
                onClick={() => setMenu(true)}
              >
                {nome}
                <ChevronDownIcon className="h-6 w-6" />
              </button>
            )}
            <div
              className={`${
                !menu ? "hidden" : ""
              } z-10 rounded-lg w-44 bg-gray-600`}
            >
              <ul className="py-2 font-medium">
                <li>
                  <Link
                    href={`/Adm/Cadastro/Usuario/Editar?Id=`}
                    className="block px-4 py-2 hover:bg-gray-900 text-white"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Meus dados
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/Adm/Cadastro/Usuario/Senha`}
                    className="block px-4 py-2 hover:bg-gray-900 text-white"
                    onClick={() => {
                      setMenu(false);
                    }}
                  >
                    Alterar senha
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Adm/Login"
                    className="block px-4 py-2 hover:bg-gray-900 text-white"
                    onClick={() => {
                      localStorage.clear();
                      sessionStorage.clear();
                    }}
                  >
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
