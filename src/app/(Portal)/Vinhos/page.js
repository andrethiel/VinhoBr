"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "../../Components/Card";
import { VINHO_LISTAR_TUDO, VINHO_POR_PAIS } from "@/app/Api";
import { motion } from "framer-motion";

export default function Vinhos() {
  useEffect(() => {
    Listar();
  }, []);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [dados, setDados] = useState([]);
  const [paises, setPaises] = useState([]);

  async function Listar() {
    const response = await VINHO_LISTAR_TUDO();

    if (response.sucesso) {
      setDados(response.dados);
      setPaises(response.paises);
    }
  }

  async function ListarPorPais(pais) {
    setDados([]);
    if (pais == 0) {
      Listar();
    }
    const response = await VINHO_POR_PAIS(pais);
    if (response.sucesso) {
      setDados(response.dados);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Nossos vinhos são escolhidos com o maior cuidado
        </h1>
      </div>
      <div className="flex justify-center items-center p-5">
        <span className="text-sm font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Esolha seus vinho por pais
        </span>
      </div>
      <div className="flex items-center justify-center mb-5">
        <motion.div
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
          ref={carousel}
        >
          <motion.div
            className="flex gap-10"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <Card tipo="Paises" image="" onClick={() => ListarPorPais(0)} />
            {paises.map((item) => (
              <Card
                tipo="Paises"
                image={item.sigra}
                texto={item.nome}
                onClick={() => ListarPorPais(item.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="flex justify-center items-center pb-14">
        <span className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Conheça nosso vinhos
        </span>
      </div>
      <div className="grid lg:grid-cols-3 gap-20">
        {dados.length > 0 ? (
          dados.map((item) => (
            <Card
              image={item.urlImagem}
              preco={item.preco.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              texto={item.nomeVinho}
            />
          ))
        ) : (
          <span className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
            Nenhum vinho encontrado
          </span>
        )}
      </div>
    </div>
  );
}
