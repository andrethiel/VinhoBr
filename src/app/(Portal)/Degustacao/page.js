"use client";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { DEGUSTACAO_LISTAR_PORTAL } from "@/app/Api";

export default function Degustacao() {
  useEffect(() => {
    ListarPortal();
  }, []);

  async function ListarPortal() {
    const response = await DEGUSTACAO_LISTAR_PORTAL();
    if (response.sucesso) {
      setDados(response.dados);
    }
  }

  const [dados, setDados] = useState([]);
  return (
    <div>
      <div className="flex justify-center items-center p-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
          Já conhece a nossa degustação de vinhos ?
        </h1>
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-5">
        {dados.map((item) => (
          <Card
            tipo="Degustação"
            texto={item.nomeVinho}
            image={item.imagem}
            valor25={item.valor25}
            valor50={item.valor50}
            valor125={item.valor125}
          />
        ))}
      </div>
    </div>
  );
}
