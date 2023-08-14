"use client";
import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { DEGUSTACAO_LISTAR_PORTAL } from "@/app/Api";
import { Loading } from "@/app/Components/Loading";

export default function Degustacao() {
  useEffect(() => {
    ListarPortal();
  }, []);

  async function ListarPortal() {
    setLoading(true);
    const response = await DEGUSTACAO_LISTAR_PORTAL();
    if (response.sucesso) {
      setDados(response.dados);
    }
    setLoading(false);
  }

  const [dados, setDados] = useState([]);

  const [loading, setLoading] = useState(false);

  if (loading) return <Loading start={true} />;
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
